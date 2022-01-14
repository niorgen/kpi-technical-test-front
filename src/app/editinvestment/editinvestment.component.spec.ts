import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinvestmentComponent } from './editinvestment.component';

describe('EditinvestmentComponent', () => {
  let component: EditinvestmentComponent;
  let fixture: ComponentFixture<EditinvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
