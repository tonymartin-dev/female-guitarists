import { Component, h } from '@stencil/core';
// import {saveAll} from "../../services/guitarist-data";

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
          {/*<ion-button slot="end" onClick={() => saveAll()}>Save</ion-button>*/}
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <app-map/>
      </ion-content>,
    ];
  }
}
