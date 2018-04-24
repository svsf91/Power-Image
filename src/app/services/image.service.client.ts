import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.client.model';

@Injectable()
export class ImageService {
  constructor(private http: HttpClient) {}

}
