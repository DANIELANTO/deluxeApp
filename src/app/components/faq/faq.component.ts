import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/interfaces';
import { MainService } from 'src/app/services/main.service';
import { Carousel } from '../shared/carousel/carousel.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  companies: Company[] = [];
  imagesForTours: Carousel[] = [];
  imagesForViajesyAlquiler: Carousel[] = [];
  panelOpenState1: boolean = false;
  panelOpenState2: boolean = false;
  panelOpenState3: boolean = false;
  panelOpenState4: boolean = false;
  panelOpenState5: boolean = false;


  constructor(private mainService: MainService) {
    this.companies = [
      {
        src: "https://i.ibb.co/M1C79QN/escalon-Plaza-Logo-min.jpg",
        alt: "Hotel mediterraneo plaza",
        name: "Hotel mediterraneo plaza"
      },
      {
        src: "https://i.ibb.co/3T2TzJ2/fondo-fundemas-header-min.png",
        alt: "Acosa S.A. de C.V.",
        name: "Acosa S.A. de C.V."
      },
      {
        src: "https://i.ibb.co/YXYd4sB/crz-Logo-min.jpg",
        alt: "Cruz Roja Salvadoreña",
        name: "Cruz Roja Salvadoreña"
      },
      {
        src: "https://i.ibb.co/cD7CCPB/leterago-Logo-min.png",
        alt: "Leterago S.A. de C.V.",
        name: "Leterago S.A. de C.V."
      },
      {
        src: "https://i.ibb.co/m0F0LrW/salnet-Logo-min.png",
        alt: "Salnet",
        name: "Salnet"
      },
      {
        src: "https://i.ibb.co/3T2TzJ2/fondo-fundemas-header-min.png",
        alt: "Fundemas",
        name: "Fundemas"
      }
    ];

    this.imagesForTours = [
      {
        src: "https://i.ibb.co/pPJf4h8/microbus-v2.jpg",
        alt: "microbus para tours"
      },
      {
        src: "https://i.ibb.co/kmR0W9p/microbus-h2.jpg",
        alt: "microbus para tours"
      },
      {
        src: "https://i.ibb.co/tzG3Tjq/microbus-v1.jpg",
        alt: "microbus para tours"
      }
    ];

    this.imagesForViajesyAlquiler = [
      {
        src: "https://i.ibb.co/N1xPDcb/4.jpg",
        alt: "vehículo para viajes y alquiler"
      },
      {
        src: "https://i.ibb.co/2MqYFqF/5.jpg",
        alt: "vehículo para viajes y alquiler"
      },
      {
        src: "https://i.ibb.co/72NWMLz/6.jpg",
        alt: "vehículo para viajes y alquiler"
      },
      {
        src: "https://i.ibb.co/pLPRJsR/7.jpg",
        alt: "vehículo para viajes y alquiler"
      },
      {
        src: "https://i.ibb.co/1THkFYd/8.jpg",
        alt: "vehículo para viajes y alquiler"
      },
      {
        src: "https://i.ibb.co/Fh77pL1/9.jpg",
        alt: "vehículo para viajes y alquiler"
      },
      {
        src: "https://i.ibb.co/ryYpP12/10.jpg",
        alt: "vehículo para viajes y alquiler"
      },
      {
        src: "https://i.ibb.co/YWNmTx9/1.jpg",
        alt: "vehículo para viajes y alquiler"
      }
    ];
  }

  ngOnInit() {
  }

  emitPanelStatusValue(): void{
    this.mainService.expansionPanelSubject.next([
      this.panelOpenState1,
      this.panelOpenState2,
      this.panelOpenState3,
      this.panelOpenState4,
      this.panelOpenState5
    ]);
  }

}
