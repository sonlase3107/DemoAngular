import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  newText = '2';

  textFromObserver: string | undefined;

  constructor(
    private dataService: DataService //-> inject
  ) {}

  ngOnInit(): void {
    this.dataService.setTextFromHello(this.newText);
    this.dataService.textFromHello$.subscribe(
      (text) => (this.textFromObserver = text)
    );
  }

  change() {
    this.dataService.setTextFromHelloObserverable(this.newText);
  }
}
