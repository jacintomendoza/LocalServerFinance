import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { FundComponent } from './fund/fund.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptosComponent } from './cryptos/cryptos.component';
import { CryptoComponent } from './crypto/crypto.component';
import { EditcryptoComponent } from './editcrypto/editcrypto.component';
import { FormsModule } from '@angular/forms'; // NEEDED FOR NGMODEL

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    FundComponent,
    CryptosComponent,
    CryptoComponent,
    EditcryptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
