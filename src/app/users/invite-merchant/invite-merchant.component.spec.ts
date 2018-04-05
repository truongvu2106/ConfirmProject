import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteMerchantComponent } from './invite-merchant.component';

describe('InviteMerchantComponent', () => {
  let component: InviteMerchantComponent;
  let fixture: ComponentFixture<InviteMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
