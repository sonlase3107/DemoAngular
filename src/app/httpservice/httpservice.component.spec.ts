import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPServiceComponent } from './httpservice.component';

describe('HTTPServiceComponent', () => {
  let component: HTTPServiceComponent;
  let fixture: ComponentFixture<HTTPServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTTPServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
