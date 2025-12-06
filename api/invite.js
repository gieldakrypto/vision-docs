import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  // Discord embed pobiera GIF
  if (userAgent.includes('Discordbot') || userAgent.includes('Slackbot')) {
    const gifPath = path.join(process.cwd(), 'public', 'invite.gif');
    const gifBuffer = fs.readFileSync(gifPath);
    res.setHeader('Content-Type', 'image/gif');
    return res.end(gifBuffer);
  }

  // Inna przeglądarka → redirect
  res.writeHead(302, { Location: 'https://discord.gg/UJsVfGpjxQ' });
  res.end();
}
