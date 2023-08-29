import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
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
