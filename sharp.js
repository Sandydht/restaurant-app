/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // mengubah ukuran gambar dengan lebar 768px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(undefined, 768)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`));

  // mengubah ukuran gambar dengan lebar 350px, dengan prefix -small.jpg
  sharp(`${target}/${image}`)
    .resize(undefined, 350)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`));
});
