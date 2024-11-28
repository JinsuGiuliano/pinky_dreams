import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import path from 'path';

async function minify() {
  try{
  const sourceDir = path.join('static', 'images', '*.{jpg,png,svg}');
  const destinationDir = path.join('static', 'images');

  await imagemin([sourceDir], {
    destination: destinationDir,
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({
        quality: [0.6, 0.8]
      }),
      // imageminSvgo({
      //   plugins: [
      //     { removeViewBox: false }
      //   ]
      // })
    ]
  });

    console.log('Images optimized');
}catch(e){
        console.log(e)
    }
}

minify();