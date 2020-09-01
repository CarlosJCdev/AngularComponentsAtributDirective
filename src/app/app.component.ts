import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

alerta: string= "alert-danger";
propiedades: boolean= true;
loading:boolean= false;

ejecutar(){
  this.loading= true;
  setTimeout(()=> this.loading= false, 3000)
}

}
