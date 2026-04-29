// A simple Stremio Addon server that returns links
export default async function handler(req, res) {
  // Set CORS headers so the browser can reach us
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  
  // 1. Return Manifest
  if (pathname.endsWith('manifest.json') || pathname === '/') {
    return res.json({
      id: "org.cinevity.community",
      name: "Cinevity Community Hub",
      version: "1.0.0",
      description: "Community provided mirrors for entertainment. Use at your own risk.",
      resources: ["stream"],
      types: ["movie", "series"],
      idPrefixes: ["tt"]
    });
  }

  // 2. Return Streams
  if (pathname.includes('/stream/')) {
    const parts = pathname.split('/');
    const file = parts[parts.length - 1];
    const id = file.replace('.json', '');
    const isMovie = !id.includes(':');

    // We generate the working VidSrc/Mirror links on the fly
    return res.json({
      streams: [
        {
          name: "Server Prime",
          title: "Stable • Multi-Source (1080p)",
          type: "embed",
          url: isMovie 
            ? `https://vidsrc.to/embed/movie/${id}` 
            : `https://vidsrc.to/embed/tv/${id.replace(':', '/')}`
        },
        {
          name: "Server Mirror",
          title: "Legacy • Classic Player (720p/1080p)",
          type: "embed",
          url: isMovie 
            ? `https://vidsrc.me/embed/movie?imdb=${id}` 
            : `https://vidsrc.me/embed/tv?imdb=${id.split(':')[0]}&sea=${id.split(':')[1]}&epi=${id.split(':')[2]}`
        }
      ]
    });
  }

  return res.status(404).json({ error: "Not found" });
}
