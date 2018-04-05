import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassModalViewComponent } from './changepassmodalview.component';

describe('ChangePassModalViewComponent', () => {
  let component: ChangePassModalViewComponent;
  let fixture: ComponentFixture<ChangePassModalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassModalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassModalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
