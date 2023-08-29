import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-select',
  templateUrl: './i18n-select.component.html',
  styleUrls: ['./i18n-select.component.css']
})
export class I18nSelectComponent implements OnInit {
  public genero='F';
  public map={m:'bienvenido usuario',f:'bienvenida usuasria',otro:'bienvenid@'}

  constructor() { }

  ngOnInit(): void {
  }

}
