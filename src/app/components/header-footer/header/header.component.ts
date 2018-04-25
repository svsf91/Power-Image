import {Component, Input, OnInit} from '@angular/core';

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
  constructor() { }

  ngOnInit() {

    this.elem = document.querySelector('.dropdown-trigger');
    this.instance = this.M.Dropdown.init(this.elem);
  }

}
