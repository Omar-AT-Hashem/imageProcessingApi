import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function resizer(
  fileName: string,
  width: number,
  height: number
): Promise<string> {
  const image = path.join(__dirname, '..', '..', 'images', `${fileName}.jpg`);

  const resizedImage = path.join(
    __dirname,
    '..',
    '..',
    'resizedImages',
    `${fileName}_${width}x${height}.jpg`
  );

  const resizedImagesFolder = path.join(__dirname, '..', '..', 'resizedImages');

  //creates a folder for the resized images if it doesnt exist
  try {
    await fs.access(resizedImagesFolder);
  } catch (err) {
    fs.mkdir(resizedImagesFolder);
  }
  //creates the resized image if it doesnt exist
  try {
    await fs.access(resizedImage);
  } catch (err) {
    await sharp(image)
      .resize(width, height)
      .toFile(resizedImage);
  }
  return resizedImage;
}

export default resizer;
