import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentlistcomponentComponent } from './investmentlistcomponent.component';

describe('InvestmentlistcomponentComponent', () => {
  let component: InvestmentlistcomponentComponent;
  let fixture: ComponentFixture<InvestmentlistcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentlistcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentlistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
