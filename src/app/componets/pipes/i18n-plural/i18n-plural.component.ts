import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-plural',
  templateUrl: './i18n-plural.component.html',
  styleUrls: ['./i18n-plural.component.css']
})
export class I18nPluralComponent implements OnInit {
  public contador = 0;
  public map = {
    '=0': 'no tiene valor', 
    '=1': 'el valor es ()',
     '=2': 'elvalor es mayor a 1 y es de  (#)', 
     'other': 'el valor supero al 2,es de (#)'
  }
  constructor() { }

  ngOnInit(): void {
  }
  aumentar() {
    this.contador++
  }
  restar() {
    this.contador--

  }}
