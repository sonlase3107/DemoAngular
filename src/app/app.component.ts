import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Le Anh Son';
  name: string = 'Le Anh Son';
  age: number = 2;
  updateName(value: string) {
    this.name = value;
  }
}
