import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApplicationComponent } from './form-application.component';

describe('FormApplicationComponent', () => {
  let component: FormApplicationComponent;
  let fixture: ComponentFixture<FormApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
