import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-httpservice',
  templateUrl: './httpservice.component.html',
  styleUrls: ['./httpservice.component.css'],
})
export class HTTPServiceComponent implements OnInit {
  textFromHello: string | undefined;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.textFromHello = this.dataService.getTextFromHello();
    this.dataService.textFromHello$.subscribe(
      (text) => (this.textFromHello = text)
    );
  }
}
