import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetFooterComponent } from './meet-footer.component';

describe('MeetFooterComponent', () => {
  let component: MeetFooterComponent;
  let fixture: ComponentFixture<MeetFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
