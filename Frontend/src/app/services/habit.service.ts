import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { habit } from '../interfaces/habit';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  private habitsUrl = 'http://localhost:8080/api/v1/list-habits';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getHabits(): Observable<habit[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<habit[]>(this.habitsUrl, { headers });
  }
}
