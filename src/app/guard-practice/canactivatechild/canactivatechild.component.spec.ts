import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanactivatechildComponent } from './canactivatechild.component';

describe('CanactivatechildComponent', () => {
  let component: CanactivatechildComponent;
  let fixture: ComponentFixture<CanactivatechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanactivatechildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanactivatechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
