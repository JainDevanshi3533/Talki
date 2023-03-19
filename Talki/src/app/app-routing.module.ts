import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { MeetingScreenComponent } from './pages/meeting-screen/meeting-screen.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path:'home' , component:HomeComponent},
  { path:'meeting-screen' ,component:MeetingScreenComponent},
  { path: 'edit_profile' ,  component:EditProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
