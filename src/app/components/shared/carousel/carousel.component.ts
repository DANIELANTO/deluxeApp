import { Component, Input, OnInit } from '@angular/core';

export interface Carousel {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: Carousel[] = [];
  activeImg: number = 0;

  constructor() { }

  ngOnInit() {
  }

  moveBack(){        
    if(this.activeImg === 0){
      this.activeImg = this.images.length - 1;
    } else {
      this.activeImg--;
    }
  }

  moveForward(){
    if(this.activeImg === this.images.length - 1){
      this.activeImg = 0;
    } else {
      this.activeImg++;
    }
  }

}
