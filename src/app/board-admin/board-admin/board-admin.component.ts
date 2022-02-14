import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITour } from 'src/app/interfaces/itour';
import { UserServiceService } from 'src/app/_services/user-service.service';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
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

  content?: string;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
