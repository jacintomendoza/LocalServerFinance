import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from '../crypto.service';
import { Crypto } from './crypto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  @Input() crypto: Crypto = {};
  @Input() message: string = "";

  constructor(private route:ActivatedRoute,
    private cryptoService: CryptoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  edit():void{
    console.log("crypto edit id", this.crypto.id)
    this.router.navigateByUrl(`/cryptos/${this.crypto.id}/edit`);
  }

  delete():void{
    this.cryptoService.deleteCrypto(this.crypto).subscribe(data =>{
      if(data){
        this.router.navigateByUrl("/cryptos");
      }
    })
  }

}
