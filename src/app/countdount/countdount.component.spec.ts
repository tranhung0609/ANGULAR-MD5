import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdountComponent } from './countdount.component';

describe('CountdountComponent', () => {
  let component: CountdountComponent;
  let fixture: ComponentFixture<CountdountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
