import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user: User = new User('yifan', '', '', 'yifan', 'dai', 'yifandai2017@gmail.com');
  userlist: User[];
  usercount = 0;
  operationcount = 0;
  uploadcount = 0;
  downloadcount = 0;

  constructor(private userService: UserService,
              private statusService: StatusService,
              private router: Router) {
  }

  ngOnInit() {
    this.statusService.checkLoggedIn().subscribe(
      response => {
        this.user = response;
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
    this.userService.findAllUser().subscribe(
      response => {
        this.userlist = response;
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
    this.usercount = this.userlist.length;
    this.operationcount = this.uploadcount + this.downloadcount;
  }
}
