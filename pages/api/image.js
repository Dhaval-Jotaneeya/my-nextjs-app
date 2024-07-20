// pages/api/image.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export default async function handler(req, res) {
  const { image } = req.query;

  if (!image) {
    return res.status(400).json({ error: 'Image name is required' });
  }

  const imagePath = path.join(process.cwd(), 'public/images', image);

  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ error: 'Image not found' });
  }

  try {
    const resizedImageBuffer = await sharp(imagePath)
      .resize({ width: 300 }) // Resize to width 300px, maintain aspect ratio
      .toBuffer();

    res.setHeader('Content-Type', 'image/jpeg');
    res.send(resizedImageBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Error processing image' });
  }
}
