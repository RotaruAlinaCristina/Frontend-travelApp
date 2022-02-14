import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITour } from 'src/app/interfaces/itour';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css'],
})
export class SpecialOffersComponent implements OnInit {
  tour!: ITour;
  tours: ITour[] = [];

  constructor(private tourService: TourService, private router: Router) {}

  ngOnInit(): void {
    this.getTourPromoted();
  }

  public getTourPromoted(): void {
    this.tourService.getTourPromoted().subscribe(
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
