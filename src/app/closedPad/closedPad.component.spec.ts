import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClosePadComponent } from './closepad.component';

describe('ClosePadComponent', () => {
  let component: ClosePadComponent;
  let fixture: ComponentFixture<ClosePadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClosePadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
