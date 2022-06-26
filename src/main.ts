import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import '@tensorflow/tfjs-node';
import * as faceapi from "face-api.js";
const canvas = require('canvas')

const { Canvas, Image, ImageData } = canvas
faceapi.env.monkeyPatch({ Canvas, Image, ImageData })

async function bootstrap() {
  const PORT = process.env.PORT || 6006;
  const app = await NestFactory.create(AppModule);

  await faceapi.nets.ssdMobilenetv1.loadFromDisk('./models')
  await faceapi.nets.faceLandmark68Net.loadFromDisk('./models')
  await faceapi.nets.faceRecognitionNet.loadFromDisk('./models')
  await faceapi.nets.faceLandmark68TinyNet.loadFromDisk('./models')

  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
bootstrap().finally(() => {
  console.log(`Bootstrap finished`);
});