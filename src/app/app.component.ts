import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics   = ['Angular', 'React', 'Vue'];
  topicsHashError = true;

  userModel = new User('', 'jinil@gmail.com', 1234567890, '', 'morning', true);

  constructor( private enrollmentService: EnrollmentService) {}
  validateTopic(value) {
      if (value === 'default') {
        this.topicsHashError = true;
      } else {
        this.topicsHashError = false;
      }
  }
  onSubmit() {
      this.enrollmentService.enroll(this.userModel)
     .subscribe (
        data => console.log ('Success!', data),
        error => console.log('Error', error)
      )
    }
}
