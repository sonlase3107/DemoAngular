import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
})
export class ListPersonComponent implements OnInit {
  datas = [
    { id: 1, name: 'Le Anh Son' },
    { id: 2, name: 'Le Thanh Tam' },
    { id: 3, name: 'Le Minh Chien' },
    { id: 4, name: 'Le Dinh Tien' },
  ];
  data: string[] = ['1','2','3','4','5']
  constructor() {}

  ngOnInit(): void {}
}
