import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMerchantComponent } from './detail-merchant.component';

describe('DetailMerchantComponent', () => {
  let component: DetailMerchantComponent;
  let fixture: ComponentFixture<DetailMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
