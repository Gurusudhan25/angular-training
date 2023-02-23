import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanmatchComponent } from './canmatch.component';

describe('CanmatchComponent', () => {
  let component: CanmatchComponent;
  let fixture: ComponentFixture<CanmatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanmatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
