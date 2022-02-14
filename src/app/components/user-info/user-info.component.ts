import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';
import { PurchasedService } from 'src/app/services/purchased.service';
import { TokenStorageServiceService } from 'src/app/_services/token-storage-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  currentUser: any;
  

  constructor(private token: TokenStorageServiceService,
    private purchased: PurchasedService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
