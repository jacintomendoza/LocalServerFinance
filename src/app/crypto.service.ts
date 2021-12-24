import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crypto } from './crypto/crypto.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http:HttpClient) { }

  getCryptos(): Observable<any> {
    return this.http.get("http://localhost:8082/api/cryptos");
  }

  getCrypto(id: number): Observable<any> {
    return this.http.get("http://localhost:8082/api/cryptos/"+id);
  }

  updateCrypto(crypto: Crypto): Observable<any> {
    console.log("from service:::::::", crypto);
    return this.http.patch(`http://localhost:8082/api/cryptos/${crypto.id}`, crypto);
  }

  deleteCrypto(crypto: Crypto): Observable<any> {
    console.log("Deleting from service....", crypto);
    return this.http.delete(`http://localhost:8082/api/cryptos/${crypto.id}`);
  }
}
