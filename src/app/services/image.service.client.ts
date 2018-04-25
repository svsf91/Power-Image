import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class ImageService {
  FOLDER = 'tests/';
  constructor() {
  }
  uploadfile(file, userId) {
    if (userId) {
      this.FOLDER = userId + '/';
    }
    const bucket = new S3(
      {
        accessKeyId: 'AKIAJQ2VALX7UTKKR27Q',
        secretAccessKey: '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',
        region: 'us-east-2'
      }
    );

    const params = {
      Bucket: 'powerimage',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

// Add an image to the end of the image list

  download(callback) {
    const bucket = new S3(
      {
        accessKeyId: 'AKIAJQ2VALX7UTKKR27Q',
        secretAccessKey: '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',
        region: 'us-east-2'
      }
    );

    const params = {
      Bucket: 'powerimage',
      // MaxKeys: 10
    };
    bucket.listObjects(params, function (err, data) {
      if (err) {
        throw err;
      }
      // console.log(data);
      callback(data);
    });
  }
}
