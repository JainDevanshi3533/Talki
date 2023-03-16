import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchMeetComponent } from './sch-meet.component';

describe('SchMeetComponent', () => {
  let component: SchMeetComponent;
  let fixture: ComponentFixture<SchMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchMeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
