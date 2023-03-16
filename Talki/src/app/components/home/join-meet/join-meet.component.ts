import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-meet',
  templateUrl: './join-meet.component.html',
  styleUrls: ['./join-meet.component.css']
})
export class JoinMeetComponent {
  constructor(private router:Router){

  }

  meeting_screen(){
    this.router.navigate(['meeting-screen']);
  }
}
