import { Component } from '@angular/core';

@Component({
  selector: 'word-com',
  templateUrl: './my.component.html',
  styleUrls: ['./app.component.css'],
})
export class WordComponent {
  //Truyen cac bien du lieu cho component
  //binding data
  en = 'Hello';
  vn = 'Xin Chao';
  check = false;
  img = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  //binding event
  click = false;

  //two-way binding variable
  name: string = 'Le Anh Son';

  //binding class and style
  i: number = 0;
  styleName: string[] = ['d1', 'd2', 'd3'];
  changeColor() {
    console.log(this.styleName.length);
    if (this.i == this.styleName.length - 1) {
      this.i = 0;
    } else {
      this.i++;
    }
  }
  classNames: string[] = ['c1', 'c2', 'c3'];
}
