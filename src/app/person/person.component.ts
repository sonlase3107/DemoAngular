import { Component, OnInit, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() age: number | undefined;
  @Output() newName = new EventEmitter();

  constructor() { }

  say(){
    console.log(this.name)
  }
  change(){
    this.newName.emit(this.name)
  }
  ngOnInit(): void {
  }

}
