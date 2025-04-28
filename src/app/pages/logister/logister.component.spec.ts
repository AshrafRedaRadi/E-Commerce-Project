import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisterComponent } from './logister.component';

describe('LogisterComponent', () => {
  let component: LogisterComponent;
  let fixture: ComponentFixture<LogisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
