import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  title = 'My Profile - Feature Branch';

  // title = 'My Profile - Master Branch';

  constructor() { }

  ngOnInit(): void {
  }
}
