import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {

  alerta: string= "info";
  alerta1: string= "warning";

  constructor() { }

  ngOnInit(): void {
  }

}
