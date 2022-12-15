import supertest, { Response } from 'supertest';
import app from '../index';
import path from 'path';
import fs, { promises as fsPromises } from 'fs';
import resizer from '../utilities/resizer'


const request = supertest(app);

describe('1 Test endpoint responses', ():void => {
  it('gets the api endpoint', async ():Promise<void> => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('2 Test  input validators', ():void => {
  describe('2.1 tests fileName input validator', () => {
    it('2.1.1 invalid input', async ():Promise<void> => {
      const response = await request.get('/api/imageProcessor?fileName=lll');
      expect(response.status).toBe(400);
    });

    describe('2.2 tests width input validator', ():void => {
      it('2.2.1 invalid input', async ():Promise<void> => {
        const response = await request.get(
          '/api/imageProcessor?fileName=fjord&width=-4&height=200'
        );
        expect(response.status).toBe(400);
      });
      describe('2.3 tests height input validator', ():void => {
        it('2.3.1 invalid input', async (): Promise<void> => {
          const response = await request.get(
            '/api/imageProcessor?fileName=fjord&width=200&height=-4'
          );
          expect(response.status).toBe(400);
        });
      });
    });
  });
});
describe('3 test image processing', ():void => {
  const width = 500
  const height = 500
  const resizedImage = path.join(__dirname, '..', '..', 'resizedImages',`fjord_${width}x${height}.jpg`);
  
  it('3.1 processed image', async ():Promise<void> => {
   
    if(fs.existsSync(resizedImage)){
      fs.unlinkSync(resizedImage) 
    }
    await resizer("fjord", width, height)

    expect(fs.existsSync(resizedImage)).toBe(true)

    fs.unlinkSync(resizedImage)
    

  });
});
