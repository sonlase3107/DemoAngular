import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }
  subTotal = 2000
  ngOnInit(): void {
  }
  birthday = new Date(2020,7,25)
  a:number = 0.125
}
