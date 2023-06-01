import { Component } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent {

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Coches';
  showYAxisLabel = true;
  yAxisLabel = 'Cantidad';
  view: [number, number] = [700, 400];
  coches = [
    {
      "name": "Sandero",
      "value": 500
    },
    {
      "name": "Ferrari",
      "value": 700
    },
    {
      "name": "BMW",
      "value": 400
    },
    {
      "name": "Bugatti",
      "value": 650
    } ,
    {
      "name": "Honda",
      "value": 890
    } 
  ];

  single = [
    {
      "name": "Perros",
      "series": [
        {
          "name": "2016",
          "value": "15000"
        },
        {
          "name": "2017",
          "value": "20000"
        },
        {
          "name": "2018",
          "value": "25000"
        },
        {
          "name": "2019",
          "value": "30000"
        }
      ],
    },
    {
      "name": "Gatos",
      "series": [
        {
          "name": "2016",
          "value": "4000"
        },
        {
          "name": "2017",
          "value": "4500"
        },
        {
          "name": "2018",
          "value": "10000"
        },
        {
          "name": "2019",
          "value": "15000"
        }
      ],
    },
    {
      "name": "Pájaros",
      "series": [
        {
          "name": "2016",
          "value": "5000"
        },
        {
          "name": "2017",
          "value": "8000"
        },
        {
          "name": "2018",
          "value": "15000"
        },
        {
          "name": "2019",
          "value": "35000"
        }
      ],
    }
  
  ];
}
