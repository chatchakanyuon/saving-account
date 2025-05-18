import { ComponentFixture, TestBed } from '@angular/core/testing';

import {TellerDashboardComponent} from './teller-dashboard.component';

describe('TellerDashboardComponent', () => {
  let component: TellerDashboardComponent;
  let fixture: ComponentFixture<TellerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TellerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TellerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
