import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  rentals:Rental[]=[]
  apiUrl="https://localhost:44327/api/rentals/getall";
 
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals(){
    this.httpClient
      .get<RentalResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.rentals=response.data;
      });
  }

}
