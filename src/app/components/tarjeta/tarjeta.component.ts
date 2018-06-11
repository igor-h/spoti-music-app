import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent  {

  constructor(private router:Router) { }

  @Input() items : any[] = [];

  verArtista(){
    this.router.
  }
}
