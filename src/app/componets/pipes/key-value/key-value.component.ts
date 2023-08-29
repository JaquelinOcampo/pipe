import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.css']
})
export class KeyValueComponent implements OnInit {
  public persona={
    nombre:"jaquelin",
    apellido:"ocampo",
    edad:24,
    direccion:'marquetalia',
    telefono:564458
  }
  constructor() { }

  ngOnInit(): void {
  }

}
