import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css'],
})
export class TemplateVariableComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  name: string = 'Le anh Son';
  submitMess: string = '';
  onSubmit(form: NgForm) {
    this.submitMess = 'Submitted. Form value is ' + JSON.stringify(form.value);
  }
}
