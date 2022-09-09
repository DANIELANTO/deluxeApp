import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(
    public dialogRef: MatDialogRef<CarouselComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if(this.images.length === 0){
      this.images = data.images;
    }
  }

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

    onNoClick(): void {
    this.dialogRef.close();
  }

}
