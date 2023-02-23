import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanactivateComponent } from './canactivate.component';

describe('CanactivateComponent', () => {
  let component: CanactivateComponent;
  let fixture: ComponentFixture<CanactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanactivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
