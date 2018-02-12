import { Component, Input } from '@angular/core';
import Mural from '../../model/mural';

/**
 * Generated class for the EventoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'evento',
  templateUrl: 'evento.html'
})
export class EventoComponent {

  @Input() item: Mural;

  constructor() {
  }

}
