import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IpurchasedTour } from 'src/app/interfaces/ipurchased-tour';
import { ITour } from 'src/app/interfaces/itour';
import { IUser } from 'src/app/interfaces/iuser';
import { UserService } from 'src/app/services/Myuser.service';
import { PurchasedService } from 'src/app/services/purchased.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-purchased-tour',
  templateUrl: './purchased-tour.component.html',
  styleUrls: ['./purchased-tour.component.css'],
})
export class PurchasedTourComponent implements OnInit {
  // @Input()
  // tour!: PurchasedTourComponent;

  currentTour: any;
  idTour!: number;
  idUser!: number;
  user1!: IUser;
  tour!: ITour;
  tours: ITour[] = [];
  purchasedTour!: IpurchasedTour;
  users: IUser[] = [];

  currentUser: any;

  formPuschased!: FormGroup;

  constructor(
    private purchasedService: PurchasedService,
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.idTour = this.route.snapshot.params['id'];
    this.tourService.getById(this.idTour).subscribe((data: ITour) => {
      this.tour = data;
    });
    // this.currentUser = this.user1.id;
    this.newPurchasedTour();
    this.getAllUsers();
  }

  newPurchasedTour() {
    this.formPuschased = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      adultSeats: new FormControl('', [Validators.required]),
      childrenSeats: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      tour: new FormControl('',[Validators.required]),
      user: new FormControl('',[Validators.required]),
    });
    
    
  }

  submit() {
    if(this.formPuschased.valid){
      this.purchasedService.addPurchased(this.formPuschased.value).subscribe(
        (data: any) => {
          this.formPuschased.reset();
          this.router.navigate(['/tours']);
        },
        (err: any) => console.log(err)
      );
    }
   
  }

  public getAllTours(): void {
    this.tourService.getAllTours().subscribe(
      (response: ITour[]) => {
        this.tours = response;
        console.log(this.tours);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        (this.users = data),
        console.log(this.users);
      }
    );

  
  }
}
