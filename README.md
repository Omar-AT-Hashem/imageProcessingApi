# imageProcessingApi

### RUN

##### to install dependencies
npm install

##### to run the build
npm run build

##### to run the linting
npm run lint

##### to run the formatting
npm run prettier

##### to run the tests
npm run test

##### to run the server
npm run start

#How to use

http://localhost:3000/api/imageProcessor?fileName=filename&width=a number above 0&height=a number above 0

#### ex
http://localhost:3000/api/imageProcessor?fileName=fjord&width=300&height=300

the api will create a folder to hold the resized images if it doesnt exist,
and will check the images inside it evertime a resize is requested, if an
image exists with the same parameter it will be displayed without being
recreated
