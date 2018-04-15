import {Component, OnInit, ViewChild} from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import {UserService} from '../../../services/user.service.client';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';
import {Router} from '@angular/router';
import {ImageService} from '../../../services/image.service.client';
import { UploadFileService } from '../../../services/uploadfile.service.client';



@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  userId: string;
  user: User = new User('hugh', '', '', 'hugh', 'Deng', 'hugh@gmail.com');
  username: string;
  message: string;
  selectedFiles: FileList;
  constructor(private router: Router,
              private userService: UserService,
              private statusService: StatusService,
              private imageService: ImageService,
              private uploadService: UploadFileService) { }

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

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadfile(file);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  logout() {
    this.userService.logout().subscribe(
      res => this.router.navigate(['/login'])
    );
  }
}
