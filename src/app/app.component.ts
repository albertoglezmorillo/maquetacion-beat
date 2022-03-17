import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bandera : boolean = false;
  estilo : string = 'GRID';
  datos : number[] = [1,2,3,4,5];

  cambiaDatos(){
    if(this.bandera){
      this.datos = [1,2,3,4,5];
    }
    else{
      this.datos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    }
    this.bandera=!this.bandera;
  }
  cambiaEstilo(){
    if(this.estilo==='FLEX'){
      this.estilo='GRID';
    }
    else {
      this.estilo='FLEX';
    }
  }
}
