import { Component, OnInit } from '@angular/core';
// import {StatusService} from "../../../services/status.service.client";
// import {UploadFileService} from "../../../services/uploadfile.service.client";
// import {UserService} from "../../../services/user.service.client";
// import {User} from "../../../models/user.client.model";
// import {ImageService} from "../../../services/image.service.client";

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}




//
// @Component({
//   selector: 'app-user-main',
//   templateUrl: './user-main.component.html',
//   styleUrls: ['./user-main.component.css']
// })
// export class UserMainComponent implements OnInit {
//   @ViewChild('fileInput') fileInput;
//   userId: string;
//   user: User = new User('hugh', '', '', 'hugh', 'Deng', 'hugh@gmail.com');
//   username: string;
//   message: string;
//   selectedFiles: FileList;
//
//   constructor(private router: Router,
//               private userService: UserService,
//               private statusService: StatusService,
//               private imageService: ImageService,
//               private uploadService: UploadFileService) {
//   }
//
//   ngOnInit() {
//     // this.statusService.checkLoggedIn().subscribe(
//     //   response => {
//     //     this.user = response;
//     //   },
//     //   err => {
//     //     this.router.navigate(['/login']);
//     //   }
//     // );
//   }
//
//   upload() {
//     const file = this.selectedFiles.item(0);
//     this.uploadService.uploadfile(file, function(err, data) {
//       if (err) {
//         alert('error uploading image');
//       } else {
//         alert('upload success!');
//       }
//     });
//   }
//
//   selectFile(event) {
//     this.selectedFiles = event.target.files;
//   }
//
//   logout() {
//     this.userService.logout().subscribe(
//       res => this.router.navigate(['/login'])
//     );
//   }
// }
