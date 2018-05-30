import { Component, ViewChild} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild('mySlider') slider:Slides;

  constructor(public navCtrl: NavController) {

  }

  onSlideChanged(e){
    let currentIndex=this.slider.getActiveIndex();
    console.log(`Estas en el slide ${currentIndex+1}`);
  }

}
