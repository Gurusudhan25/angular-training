import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDogListComponent } from './s-dog-list.component';

describe('SDogListComponent', () => {
  let component: SDogListComponent;
  let fixture: ComponentFixture<SDogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SDogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
