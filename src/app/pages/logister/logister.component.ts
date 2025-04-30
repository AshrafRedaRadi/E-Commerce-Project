import { Component } from '@angular/core';

@Component({
  selector: 'app-logister',
  standalone: false,
  templateUrl: './logister.component.html',
  styleUrl: './logister.component.css'
})
export class LogisterComponent {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  onSubmit(registerForm: any): void {
    console.log('Form submitted successfully!', registerForm.value);
  }
}
