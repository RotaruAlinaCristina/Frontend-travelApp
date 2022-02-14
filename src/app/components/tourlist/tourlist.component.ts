import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { ITour } from 'src/app/interfaces/itour';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css'],
})
export class TourlistComponent implements OnInit {
  @Input('tour')
  tour!: ITour;

  mainMessage = '';
  ELEMENT_DATA: ITour[] = [];

  tours: ITour[] = [];

  editTour!: ITour;

  displayedColumns: string[] = [
    'Departure City',
    'Arrival City',
    ' Departure Airport',
    'Arrival Airport',
    'Hotel',
    'Action',
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private tourService: TourService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTours();
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

  public onUpdateTour(id: number): void {
    this.tourService.update(id, this.tour).subscribe(
      (response: ITour) => {
        console.log(response);
        this.router.navigate(['update-tour', id])
        this.getAllTours();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  deleteTour(id: number) {
    this.tourService.deleteTour(id).subscribe((res) => {
      this.tours = this.tours.filter((item) => item.id !== id);
      console.log('Post deleted successfully!');
    });
  }

  showTheDetails(id: number) {
    this.router.navigate(['tour', id]);
  }


  updateTour(id: number){
    this.router.navigate(['update-tour', id]);
  }
}
