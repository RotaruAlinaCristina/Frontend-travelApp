import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITour } from 'src/app/interfaces/itour';
import { TourService } from 'src/app/services/tour.service';
import { TokenStorageServiceService } from 'src/app/_services/token-storage-service.service';

@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.css'],
})
export class SummerComponent implements OnInit {
  tour!: ITour;
  tours: ITour[] = [];
  currentUser: any;

  constructor(
    private tourService: TourService,
    private router: Router,
    private token: TokenStorageServiceService
  ) {}

  ngOnInit(): void {
    this.getTourSummer();
    this.currentUser = this.token.getUser();
  }

  public getTourSummer(): void {
    this.tourService.getSummerTours().subscribe(
      (response: ITour[]) => {
        this.tours = response;
        console.log(this.tours);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  showTheDetails(id: number) {
    this.router.navigate(['tour', id]);
  }

  showpPurchasedTour(id: number) {
    this.router.navigate(['purchased', id]);
  }
}
