import { Injectable } from '@nestjs/common';
import * as faceapi from 'face-api.js';
const canvas = require('canvas')

@Injectable()
export class AppService {
  async getEmbedding(imageUrl: string) {
    const img = await canvas.loadImage(imageUrl)
    const result = await faceapi.detectSingleFace(img)
        .withFaceLandmarks(true)
        .withFaceDescriptor();
    return result;
  }
}
