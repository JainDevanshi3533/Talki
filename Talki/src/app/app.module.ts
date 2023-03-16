import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { TitleComponent } from './components/title/title.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { ContentComponent } from './components/main/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinMeetComponent } from './components/home/join-meet/join-meet.component';
import { SchMeetComponent } from './components/home/sch-meet/sch-meet.component';
import { MeetingScreenComponent } from './pages/meeting-screen/meeting-screen.component';
import { MeetFooterComponent } from './components/meeting-screen/meet-footer/meet-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TitleComponent,
    HeaderComponent,
    MainComponent,
    NavbarComponent,
    ContentComponent,
    HomeComponent,
    JoinMeetComponent,
    SchMeetComponent,
    MeetingScreenComponent,
    MeetFooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
