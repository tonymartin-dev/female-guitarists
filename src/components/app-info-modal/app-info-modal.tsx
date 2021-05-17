import {Component, ComponentInterface, h, Host, JSX, Prop} from "@stencil/core"
import { GuitaristInfo } from '../../services/guitarist-data';

@Component({
  tag: "app-info-modal",
  styleUrl: "app-info-modal.pcss",
  scoped: true,
})
export class InfoModal implements ComponentInterface {
  @Prop() country?: string
  @Prop() women?: GuitaristInfo[]

  // @State() countryData

  // componentWillLoad(): Promise<void> | void {
  //   this.countryData = getGuitarristsInfo(this.country)
  //   console.log('countryData', this.countryData)
  // }

  render(): JSX.Element {
    return (
      <Host>
        <ion-header>
          <ion-toolbar><h1>{this.country}</h1></ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-tabs>
            <ion-tab-bar slot="top">
              {this.women.map(person => (
                <ion-tab-button tab={person.name}>{person.name}</ion-tab-button>
              ))}
            </ion-tab-bar>

            {this.women.map(person => (
              <ion-tab tab={person.name}>
                <app-guitarist-info person={person}/>
              </ion-tab>
            ))}
          </ion-tabs>

        </ion-content>
      </Host>
    )
  }
}



