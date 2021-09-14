import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name: string = '';
  styleText1 = {
    color: 'green',
    fontSize: '50px',
  };
  styleText2 = {
    color: 'red',
    fontSize: '50px',
  };
  currentClass = {
    c1: this.name.length % 2 == 0,
    c2: this.name.length % 2 != 0,
  };

  data: string[] = ['1','2','3','4','5']
}
