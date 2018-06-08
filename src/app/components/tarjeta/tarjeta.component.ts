import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent  {

  constructor() { }

  @Input() items : any[] = [];

}
