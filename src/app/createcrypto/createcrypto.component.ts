import { Component, OnInit } from '@angular/core';
import { Crypto } from '../crypto/crypto.model';
import { CryptoService } from '../crypto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcrypto',
  templateUrl: './createcrypto.component.html',
  styleUrls: ['./createcrypto.component.scss']
})
export class CreatecryptoComponent implements OnInit {

  crypto:Crypto = {};

  constructor(
    private cryptoService: CryptoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  create():void{
    this.cryptoService.createCrypto(this.crypto).subscribe(data =>{
      // Data validation
      if(data){
        this.router.navigateByUrl("/cryptos");
      }
    })
  }

}
