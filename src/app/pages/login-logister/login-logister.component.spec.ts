import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLogisterComponent } from './login-logister.component';

describe('LoginLogisterComponent', () => {
  let component: LoginLogisterComponent;
  let fixture: ComponentFixture<LoginLogisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginLogisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLogisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
