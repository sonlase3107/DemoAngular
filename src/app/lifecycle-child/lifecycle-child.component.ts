import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css'],
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  number:number = 0

  increasing(){
    this.number++;
  }

  ngDoCheck(): void {
    console.log('Do Check')
  }
  @Input() data: string = 'Hello First Change';
  @Input() name: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    // for (const i in changes) {
    //   const propData = changes[i]
    //   console.log(propData.currentValue)
    // }
  }

  ngOnDestroy(): void {
    // console.log('Life Cycle Component OnDestroy!!!');
  }
  ngOnInit(): void {
    // console.log('Child Component OnInit!!!');
  }
}
