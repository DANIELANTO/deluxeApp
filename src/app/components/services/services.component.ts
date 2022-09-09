import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [];
  constructor() {
    this.services = [
      {
        icon: "directions_car",
        title: "Transporte de personal",
        description: "Servicios de transporte a tarifas accesibles para todo publico, con precios especiales para clientes constantes; disponemos con unidades comodas y de año reciente, con A/C y seguro de terceros para su mayor seguridad."
      },
      {
        icon: "car_rental",
        title: "Alquiler de vehículos",
        description: "Contamos con vehiculos tipo sedan y camionetas, años recientes, en perfecto estado y con seguro de terceros para su mayor seguridad."
      },
      {
        icon: "airport_shuttle",
        title: "Tours personalizados",
        description: "Servicios turísticos dentro y fuera de El Salvador en el área centroamericana. Contamos con microbuses comodos y espaciosos, A/C y seguro de terceros para su mayor seguridad."
      }
    ];
  }

  ngOnInit() {
  }

}
