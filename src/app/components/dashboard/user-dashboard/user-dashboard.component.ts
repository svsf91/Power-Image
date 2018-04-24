import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: User = new User('hugh', '', '', 'hugh', 'Deng', 'hugh@gmail.com');
  username: string;
  message: string;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private statusService: StatusService,
              private router: Router) {}

  ngOnInit() {
    // this.statusService.checkLoggedIn().subscribe(
    //   response => {
    //     this.user = response;
    //   },
    //   err => {
    //     this.router.navigate(['/login']);
    //   }
    // );
  }

}
