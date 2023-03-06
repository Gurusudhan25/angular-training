import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObervablesComponent } from './obervables.component';

describe('ObervablesComponent', () => {
  let component: ObervablesComponent;
  let fixture: ComponentFixture<ObervablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObervablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObervablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
