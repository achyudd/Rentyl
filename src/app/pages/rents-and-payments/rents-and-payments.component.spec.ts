import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsAndPaymentsComponent } from './rents-and-payments.component';

describe('RentsAndPaymentsComponent', () => {
  let component: RentsAndPaymentsComponent;
  let fixture: ComponentFixture<RentsAndPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentsAndPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentsAndPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
