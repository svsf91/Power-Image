import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  M = require('../../../../assets/vendors/js/materialize.js');
  elem: any;
  instance: any;
  constructor() { }

  ngOnInit() {
    this.elem = document.querySelector('.materialboxed');
    this.instance = this.M.Materialbox.init(this.elem, Option);
  }

}
