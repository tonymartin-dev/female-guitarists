import {Component, ComponentInterface, h, Host, JSX, Prop, State} from "@stencil/core"

@Component({
  tag: "app-guitarist-info",
  styleUrl: "app-guitarist-info.pcss",
  scoped: true,
})
export class AppGuitaristInfo implements ComponentInterface {
  @Prop() person

  @State() selectedVideo = 0

  render(): JSX.Element {
    const videoUrl = `https://www.youtube.com/embed/${this.person.youtube?.[this.selectedVideo]}`
    const isFirstVideo = this.selectedVideo === 0
    const isLastVideo = this.selectedVideo === this.person?.youtube?.length -1

    console.log({selected: this.selectedVideo,videoUrl})
    return (
      <Host>
        <ion-card-header>
          <ion-card-title><h1>{this.person.name}</h1></ion-card-title>
          <ion-card-subtitle>{this.person.style}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <h2>Biografía</h2>
          <p class="bio">{this.person.bio}</p>

          <h2>Vídeos</h2>
          <div class="video-slider">
            <ion-button fill="clear" onClick={() => this.previousVideo()} disabled={isFirstVideo}>
              <ion-icon name="caret-back"/>
            </ion-button>
            <iframe width="420" height="315" src={videoUrl} frameBorder="0"/>
            <ion-button fill="clear" onClick={() => this.nextVideo()} disabled={isLastVideo}>
              <ion-icon name="caret-forward"/>
            </ion-button>
          </div>
        </ion-card-content>

      </Host>
    )
  }

  private nextVideo() {
    if(this.selectedVideo < this.person.youtube.length - 1){
      this.selectedVideo++
    }
  }

  private previousVideo() {
    if(this.selectedVideo > 0){
      this.selectedVideo--
    }
  }
}
