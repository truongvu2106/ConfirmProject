import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantDetailsComponent } from './merchantdetails.component';

describe('MerchantDetailsComponent', () => {
  let component: MerchantDetailsComponent;
  let fixture: ComponentFixture<MerchantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
