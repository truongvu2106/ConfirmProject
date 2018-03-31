import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepassmodalviewComponent } from './changepassmodalview.component';

describe('ChangepassmodalviewComponent', () => {
  let component: ChangepassmodalviewComponent;
  let fixture: ComponentFixture<ChangepassmodalviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepassmodalviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepassmodalviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
