import express, { Request, Response } from 'express';
import resizer from '../../utilities/resizer';

const imageProcessor = express.Router();

imageProcessor.get('/', async (req: Request, res: Response):Promise<void> => {
  const fileName = req.query.fileName as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);

  if (!fileName) {
    res.status(400).send('Filename was not given');
    return;
  }
  if (!(width > 0)) {
    res.status(400).send('Invalid width value, width must be greater than 0');
    return;
  }
  if (!(height > 0)) {
    res.status(400).send('Invalid height value, height must be greater than 0');
    return;
  }

  try {
    const resizedImage = await resizer(fileName, width, height);
    res.status(200).sendFile(resizedImage);
  } catch (err) {
    res.status(404).send('image not found');
  }
});

export default imageProcessor;
