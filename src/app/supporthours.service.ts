import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class SupporthoursService {

  private baseURL = "http://localhost:8080/analitics/supporthours";

  constructor(private httpClient: HttpClient) { }

  getSupporthours(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${this.baseURL}`);
  }
  
}