import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class UploadFileService {

  FOLDER = 'images/';
  constructor() { }

  uploadfile(file, callback) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIAJWHN43IID4CJYGGQ',
        secretAccessKey: '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',
        region: 'us-west-1'
      }
    );

    const params = {
      Bucket: 'powerimage-bucket',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
      } else {
        console.log('Successfully uploaded file.', data);
      }
      callback(err, data);
    });
  }

}
