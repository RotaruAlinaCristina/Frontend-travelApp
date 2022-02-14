import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user/board-user.component';
import { EditTourComponent } from './components/edit-tour/edit-tour.component';
import { HomeComponent } from './components/home/home.component';
import { LastMinuteComponent } from './components/last-minute/last-minute.component';
import { LoginComponent } from './components/login/login.component';
import { NewTourComponent } from './components/new-tour/new-tour.component';
import { PurchasedTourComponent } from './components/purchased-tour/purchased-tour.component';
import { RegisterComponent } from './components/register/register.component';
import { SignupComponent } from './components/signup/signup.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { SummerComponent } from './components/summer/summer.component';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { TourlistComponent } from './components/tourlist/tourlist.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tours', component: TourlistComponent },
  { path: 'newTour', component: NewTourComponent },
  { path: 'tour/:id', component: TourCardComponent },
  { path: 'update-tour/:id', component: EditTourComponent },

  { path: 'users/:userId/view', component: UserInfoComponent },
  { path: 'user-info/:id', component: UserInfoComponent },
  { path: 'profile', component: UserInfoComponent },
  { path: 'last-minute', component: LastMinuteComponent },
  { path: 'offers', component: SpecialOffersComponent },
  { path: 'summer', component: SummerComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'purchased', component: PurchasedTourComponent },
  { path: 'purchased/:id', component: PurchasedTourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
