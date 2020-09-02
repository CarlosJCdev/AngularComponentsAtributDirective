import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, 
  AfterViewInit, AfterViewChecked, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
    <app-ng-style></app-ng-style>
    <hr>

    <div [ngClass]="alerta" class="alert" role="alert">
        <strong>Esta echo</strong>
    </div>

    <button class="btn btn-info" type="button" (click)="alerta= 'alert-info'">Info</button>
    <button class="btn btn-success" type="button" (click)="alerta= 'alert-success'">Success</button>
    <hr>
    <h3 [ngClass]="{'text-danger': propiedades, 'text-info': !propiedades }">HOlA</h3>
    <hr>
    <br>
    <h3>Procesos asyncronos</h3>
    <button (click)="ejecutar()" class="btn btn-primary" type="button" name="button" [disabled]="loading" [ngClass]="{'black': !loading, 'red': loading}">
     <span *ngIf="!loading">HOLA</span>
     <span *ngIf="loading">ESPERA</span>
    </button>

    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, 
AfterViewInit, OnDestroy, AfterContentChecked {

alerta: string= "alert-danger";
propiedades: boolean= true;
loading:boolean= false;

ejecutar(){
  this.loading= true;
  setTimeout(()=> this.loading= false, 3000)
}
  constructor() {
    console.log("constructor")
   }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnChanges(){
    console.log("onOnChanges");
  }
  ngDoCheck(){
    console.log("onDoCheck");
  }
  ngAfterContentInit(){
    console.log("onAfterContentInit");
  }
  ngAfterViewChecked(){
    console.log("onAfterViewChecked");
  } 
  ngAfterViewInit(){
    console.log("onAfterViewInit");
  }
  ngOnDestroy(){
    console.log("onOnDestroy");
  }
  ngAfterContentChecked(){
    console.log("onAfterContentChecked");
  }

}
