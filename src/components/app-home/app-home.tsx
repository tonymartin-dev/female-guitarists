import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Mujeres Guitarristas de todo el mundo</ion-title>
          <p slot="end">Haz click en un país coloreado para conocer algunas de sus guitarristas</p>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <app-map/>
      </ion-content>,
    ];
  }
}
