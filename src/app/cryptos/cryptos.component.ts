import { Component, Input, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { Crypto } from '../crypto/crypto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.scss']
})
export class CryptosComponent implements OnInit {

  @Input() crypto: Crypto = {};
  mensaje: string = "Via Cryptos Component";

  constructor(
    private cryptoService: CryptoService,
    private router: Router  ) { }

  cryptos:Crypto[] = [];

  ngOnInit(): void {
    this.cryptoService.getCryptos().subscribe(payload =>{
      this.cryptos = payload;
    })
  }

  create():void{
    this.router.navigateByUrl(`/cryptos/create`);
  }

}
