import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';
import {Router} from '@angular/router';
import {ImageService} from '../../../services/image.service.client';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  userId: string;
  user: User;
  username: string;
  images: any = [];
  constructor(private router: Router,
              private userService: UserService,
              private statusService: StatusService,
              private imageService: ImageService) { }

  ngOnInit() {
    this.statusService.checkLoggedIn().subscribe(
      response => {
        this.user = response;
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
  }

  download() {
    const test = [];
    this.imageService.download(function(data) {
      console.log(typeof data.Contents);
      data.Contents.forEach(function(obj) {
        if (obj.Size !== 0) {
          test.push(obj);
        }
      });
      console.log(test);
    }, this.user._id);
    this.images = test;
  }

}
