import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44327/api/';
  constructor(private httpClient: HttpClient) { }
  getCars():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getbybrand?id="+brandId;
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getbycolor?id="+colorId;
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetails():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/GetCarDetails";
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
