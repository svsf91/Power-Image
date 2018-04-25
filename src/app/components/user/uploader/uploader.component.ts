import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';
import {Router} from '@angular/router';
import {ImageService} from '../../../services/image.service.client';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  user: User;
  username: string;
  message: string;
  selectedFiles: FileList;
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

  upload() {
    const file = this.selectedFiles.item(0);
    this.imageService.uploadfile(file, this.user._id);
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
