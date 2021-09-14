import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor() {}
  data = 'Helllo';
  isShow: boolean = true;
  ngOnInit(): void {
    console.log('Init Demo Component');
  }
  toggle() {
    this.isShow = !this.isShow;
  }
}
