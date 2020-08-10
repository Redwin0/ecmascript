import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecma-index',
  templateUrl: './ecma-index.component.html',
  styleUrls: ['./ecma-index.component.css']
})
export class EcmaIndexComponent implements OnInit {
  public edad:number=null;
  constructor() { }

  ngOnInit(): void {
  }

}
