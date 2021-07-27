import { OnInit } from '@angular/core';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @ViewChild('firstAccordion') firstAccordion: MatAccordion;
  @ViewChild('secondAccordion') secondAccordion: MatAccordion;

  displayMode: string = 'default';
  displayMode1: string = 'default';
  multi = true;
  hideToggle = false;
  hideToggle1 = false;
  disabled = false;
  showPanel3 = true;
  panel11 = false;
  expandedHeight: string;
  collapsedHeight: string;

  openAllFirst() {
    this.firstAccordion.openAll();
    this.secondAccordion.openAll();
  }

  closeAllFirst() {
    this.firstAccordion.closeAll();
  }

  openAllSecond() {
    this.secondAccordion.openAll();
  }

  closeAllSecond() {
    this.secondAccordion.closeAll();
  }
}
