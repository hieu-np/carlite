import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyexchangepageComponent } from './moneyexchangepage.component';

describe('MoneyexchangepageComponent', () => {
  let component: MoneyexchangepageComponent;
  let fixture: ComponentFixture<MoneyexchangepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyexchangepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyexchangepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
