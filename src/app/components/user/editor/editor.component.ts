import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  iframe = 0;
  constructor() { }

  ngOnInit() {
  }
  switch() {
    this.iframe = (this.iframe + 1) % 3;
  }
}
