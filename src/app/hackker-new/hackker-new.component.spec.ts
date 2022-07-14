import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackkerNewComponent } from './hackker-new.component';

describe('HackkerNewComponent', () => {
  let component: HackkerNewComponent;
  let fixture: ComponentFixture<HackkerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackkerNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackkerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
