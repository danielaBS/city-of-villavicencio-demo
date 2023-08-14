
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MockServices {
  public listado = [];

  constructor(private http: HttpClient) {}
  
  private baseListUrl: string = "https://random-data-api.com/api/";

  getUsers() {
    return this.http.get<any[]>(this.baseListUrl.concat("users/random_user?size=6"))    
  }

  getVentasCliente(): Observable<any> {
    return this.http.get<any[]>(this.baseListUrl.concat("reportes/ventasCliente"))    
  }

  getVentasTotales(): Observable<any> {
    return this.http.get<any[]>(this.baseListUrl.concat("reportes/ventasTotales"))    
  }

  getTop5(): Observable<any>{
    return this.http.get<any[]>(this.baseListUrl.concat("reportes/getTop5"))    
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
  }

}
