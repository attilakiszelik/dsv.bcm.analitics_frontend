import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class UsagesService {

  private baseURL = "http://localhost:8080/analitics/usages/";

  constructor(private httpClient: HttpClient) { }

  getUsages(year: number): Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${this.baseURL}${year}`);
  }

}
