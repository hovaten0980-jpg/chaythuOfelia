const https = require('https');
https.get('https://storage.googleapis.com/aistudio-v2-uploads-prod/uploads/u-80862024b4ce469ab502283e3ae24fe8/image_53f2df79.png', (res) => {
  console.log('Status Code:', res.statusCode);
});
