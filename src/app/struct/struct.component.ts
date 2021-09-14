import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css'],
})
export class StructComponent implements OnInit {
  isShowed: boolean = true;
  id: string = '';
  name: string = '';
  job: string = '';
  isStudent: boolean = false;
  datas = [
    { id: 1, name: 'Le Anh Son', job: 'Front-end', isStudent: true },
    { id: 2, name: 'Le Thanh Tam', job: 'Back-end', isStudent: false },
    { id: 3, name: 'Le Ngoc Anh', job: 'Full-Stack', isStudent: true },
    { id: 4, name: 'Le Thanh Son', job: 'DevOps', isStudent: false },
    { id: 5, name: 'Le Minh Chien', job: 'Data engineering', isStudent: true },
  ];
  constructor() {}

  addNew() {
    this.datas.unshift({
      id: Number(this.id),
      name: this.name,
      job: this.job,
      isStudent: this.isStudent,
    });
  }
  ngOnInit(): void {}
}
