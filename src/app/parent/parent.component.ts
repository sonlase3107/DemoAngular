import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ViewChild(ChildComponent)
  myChild: ChildComponent = new ChildComponent();

  onAddForChild() {
    this.myChild.value++;
  }
}
