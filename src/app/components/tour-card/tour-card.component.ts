import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IpurchasedTour } from 'src/app/interfaces/ipurchased-tour';
import { ITour } from 'src/app/interfaces/itour';
import { PurchasedService } from 'src/app/services/purchased.service';
import { TourService } from 'src/app/services/tour.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css'],
})
export class TourCardComponent implements OnInit {
  closeResult!: string;
  id!: number;
  idPurchased!: number;
  tour!: ITour;
  purchasedTour!: IpurchasedTour;

  formPuschased!: FormGroup;
  httpClient: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService,
    private purchasedTourService: PurchasedService
  ) {}

  ngOnInit() {
    // this.tour = new ITour();

    this.id = this.route.snapshot.params['id'];

    this.tourService.getById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.tour = data;
      },
      (error) => console.log(error)
    );
  }

  list() {
    this.router.navigate(['/tours']);
  }

  buy() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // this.params = params.get('id');
    });
  }

  showpPurchasedTour(id: number) {
    this.router.navigate(['purchased', id]);
  }
}
