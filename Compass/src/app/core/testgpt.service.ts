import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface Credentials {
  success:       boolean;
  expires_at:    string;
  request_token: string;
}
@Injectable({
  providedIn: 'root'
})
export class TestgptService {


  private apiKey = '264434b9906c0733bfb49110e3a3e156';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor() {}

  login(credentials: Credentials): Observable<string | null> {
    const requestTokenUrl = `${this.apiUrl}/authentication/token/new`;

    return axios.post(requestTokenUrl, { api_key: this.apiKey }).then((responseToken) => {
      const requestToken = responseToken.data.request_token;

      const validateLoginUrl = `${this.apiUrl}/authentication/token/validate_with_login`;

      return axios
        .post(validateLoginUrl, {
          api_key: this.apiKey,
          //username: credentials.username,
          //password: credentials.password,
          request_token: requestToken,
        })
        .then((responseLogin) => {
          const sessionUrl = `${this.apiUrl}/authentication/session/new`;

          return axios
            .post(sessionUrl, {
              api_key: this.apiKey,
              request_token: requestToken,
            })
            .then((responseSession) => responseSession.data.session_id)
            .catch(this.handleError);
        })
        .catch(this.handleError);
    });
  }

  private handleError(error: any): Observable<never> {
    console.error('Error al autenticar:', error.response?.data || error.message);
    return of(null);
  }
}