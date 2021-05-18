import { Component, ComponentInterface, Element, h, Host, JSX, Prop, State } from '@stencil/core';
import {guitaristsInfo} from "../../services/guitarist-data";

@Component({
  tag: "app-info-modal",
  styleUrl: "app-info-modal.pcss",
  scoped: true,
})
export class InfoModal implements ComponentInterface {
  @Prop() country?: string

  @State() countryData

  @Element() el!: HTMLAppInfoModalElement

  private modalRef?: HTMLIonModalElement

  componentWillLoad(): Promise<void> | void {
    this.countryData = getGuitarristsInfo(this.country)
    console.log('countryData', this.countryData)
  }

  componentDidLoad() {
    this.modalRef = this.el.closest('ion-modal')
  }

  render(): JSX.Element {
    return (
      <Host>
        <ion-header>
          <ion-toolbar>
            <h1>{this.country}</h1>
            <ion-button slot="end" fill="clear" onClick={() => this.modalRef?.dismiss()}>
              <ion-icon name="close"/>
            </ion-button>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-tabs>
            <ion-tab-bar slot="top">
              {this.countryData.map(person => (
                <ion-tab-button tab={person.name}>{person.name}</ion-tab-button>
              ))}
            </ion-tab-bar>

            {this.countryData.map(person => (
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

const getGuitarristsInfo = (country: string) => {
  return guitaristsInfo[country].map(person => ({
    ...person,
    ...(person.youtube
      ? {youtube: person.youtube
          .map(url => {
            return url
              .split('?')
              // @ts-ignore
              .flatMap(i => i.split('&'))
              .map(i => i.split("="))
              .find(i => i[0] === 'v')?.[1]
          })
          .filter(id => !!id)
      }
      : {})
  }))

}
