import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { marker } from './marker';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  markers;

  constructor(private http:HttpClient) { }

  getMarkerData():Observable<marker[]>{
    return this.http.get<marker[]>('/assets/data.json');
  }
}
