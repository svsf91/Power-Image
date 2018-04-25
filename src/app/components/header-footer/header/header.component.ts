import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: String;
  M = require('../../../../assets/vendors/js/materialize.js');
  elem: any;
  instance: any;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {

    this.elem = document.querySelector('.dropdown-trigger');
    this.instance = this.M.Dropdown.init(this.elem);
  }

  logout() {
    return this.userService.logout().subscribe(response => {
      this.router.navigate(['']);
    });
  }

}
