import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoService } from '../crypto.service';
import { Crypto } from '../crypto/crypto.model';

@Component({
  selector: 'app-editcrypto',
  templateUrl: './editcrypto.component.html',
  styleUrls: ['./editcrypto.component.scss']
})
export class EditcryptoComponent implements OnInit {

  crypto:Crypto = {};

  constructor(private router: Router,
    private cryptoService: CryptoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      console.log("myid", myid); 
      this.cryptoService.getCrypto(myid).subscribe(payload=>{
        console.log("payload is:", payload);
        this.crypto = payload;
      })
    })
  }

  update(): void{
    this.cryptoService.updateCrypto(this.crypto).subscribe(data =>{
      // Data validation
      console.log("what is this", data);
      if(data){
        this.router.navigateByUrl("/cryptos");
      }
    })
  }

}
