import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
     hola mundo
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fab fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fab fa-minus"></i>
    </button>


    <!-- ------------------------------------------------------------------ -->
    <p [ngStyle]="{'color': color}">
     hola mundo2
    </p>

    <button class="btn btn-primary" (click)="color= 'red'">
      <i class="fab fa-minus"></i>
    </button>

    <button class="btn btn-primary" (click)="color= 'black'">
      <i class="fab fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  tamano: number= 20;
  color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
