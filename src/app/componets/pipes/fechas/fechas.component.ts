import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.css']
})
export class FechasComponent implements OnInit {

public hoy:number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
