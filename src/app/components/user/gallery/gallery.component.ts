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
  userId = 'tests';
  user: User;
  username: string;
  images: any = [];
  constructor(private router: Router,
              private userService: UserService,
              private statusService: StatusService,
              private imageService: ImageService) { }

  ngOnInit() {
    this.userId = 'tests';
    this.statusService.checkLoggedIn().subscribe(
      response => {
        this.user = response;
        if (this.user && this.user._id) {
          this.userId = this.user._id;
        }
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
  }

  download() {
    const test = [];
    const this_userId = this.userId;
    this.imageService.download(function(data) {
      data.Contents.forEach(function(obj) {
        if (obj.Size !== 0 && (obj.Key.split('/', 1)[0] === this_userId)) {
          test.push(obj);
        }
      });
    });
    this.images = test;
  }

}
