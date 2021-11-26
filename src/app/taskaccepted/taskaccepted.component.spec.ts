import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TaskAcceptedComponent } from './taskaccepted.component';

describe('TaskAcceptedComponent', () => {
  let component: TaskAcceptedComponent;
  let fixture: ComponentFixture<TaskAcceptedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TaskAcceptedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
