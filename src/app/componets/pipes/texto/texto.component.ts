import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {
public text:string="eSto eS uN teXto cuAlQuierA"
  constructor() { }

  ngOnInit(): void {
  }

}
