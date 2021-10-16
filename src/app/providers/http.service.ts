import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observer, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@environments/environment';

export interface HttpOptions {
  body?: any;
  headers?: | HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: | HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
}

export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private resource: string, private http: HttpClient) { }

  protected get<R>(path = '', httpOptions = this.httpOptions): Promise<R> {
    const header: {
      headers: HttpHeaders;
    } = httpOptions;

    return this.http
      .get<R>(`${environment.apiUrl}/${this.resource}${path}`, header)
      .pipe(catchError(this.errorHandler))
      .toPromise();
  }

  protected post<T, R>(body: T, path?: string, httpOptions = this.httpOptions): Promise<R> {
    const header: {
      headers: HttpHeaders;
    } = httpOptions;

    return this.http
      .post<R>(`${environment.apiUrl}/${this.resource}${path || ''}`, body, header)
      .pipe(catchError(this.errorHandler))
      .toPromise();
  }

  protected put<T, R>(body: T, path?: string, httpOptions = this.httpOptions): Promise<R> {
    const header: {
      headers: HttpHeaders;
    } = httpOptions;

    return this.http
      .put<R>(`${environment.apiUrl}/${this.resource}${path || ''}`, JSON.stringify(body), header)
      .pipe(catchError(this.errorHandler))
      .toPromise();
  }

  protected delete<R>(path?: string, httpOptions = this.httpOptions): Promise<R> {
    const header: {
      headers: HttpHeaders;
    } = httpOptions || this.httpOptions;
    return this.http
      .delete<R>(`${environment.apiUrl}/${this.resource}${path || ''}`, header)
      .pipe(catchError(this.errorHandler))
      .toPromise();
  }


  // tslint:disable-next-line: typedef
  private errorHandler(error: any) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}`, error.error);
    }

    return throwError(error);
  }
}
