import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los juegos favoritos de {{username}}</h3>
    <p>
      games works!
    </p>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = ''; //Comunicación bidireccional, datos de padre a hijo
  @Output() addFavoriteEvent = new EventEmitter<string>(); //Comunicación bidireccional, datos de hijo a padre

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName); // Lo de abajo es igual a esto
    //alert(`A ${this.username} le gusta jugar a ${gameName}`);
  }

  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn'
    },
    {
      id: 3,
      name: 'Bloodborne' 
      }
  ]
}
