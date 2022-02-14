import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationBarComponent } from './ui/navigation-bar/navigation-bar/navigation-bar.component';
import { BottomBarComponent } from './ui/bottom-bar/bottom-bar/bottom-bar.component';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditTourComponent } from './components/edit-tour/edit-tour.component';
import { LoginComponent } from './components/login/login.component';
import { NewTourComponent } from './components/new-tour/new-tour.component';
import { RegisterComponent } from './components/register/register.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { LastMinuteComponent } from './components/last-minute/last-minute.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { SummerComponent } from './components/summer/summer.component';
import { SignupComponent } from './components/signup/signup.component';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { BoardAdminComponent } from './board-admin/board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor.service';
import { TourlistComponent } from './components/tourlist/tourlist.component';
import { PurchasedTourComponent } from './components/purchased-tour/purchased-tour.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BottomBarComponent,
    EditTourComponent,
    LoginComponent,
    NewTourComponent,
    RegisterComponent,
    UserInfoComponent,
    LastMinuteComponent,
    SpecialOffersComponent,
    SummerComponent,
    SignupComponent,
    TourCardComponent,
    BoardAdminComponent,
    BoardUserComponent,
    TourlistComponent,
    PurchasedTourComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatRippleModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    FontAwesomeModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
