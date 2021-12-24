import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from './fund/fund.component';
import { FundsComponent } from './funds/funds.component';
import { CryptosComponent } from './cryptos/cryptos.component';
import { CryptoComponent } from './crypto/crypto.component';
import { EditcryptoComponent } from './editcrypto/editcrypto.component';

const routes: Routes = [
  {path: "funds", component: FundsComponent},
  {path: "funds/:id", component: FundComponent},
  {path: "cryptos", component: CryptosComponent},
  {path: "crypto/:id", component: CryptoComponent},
  {path: "cryptos/:id/edit", component: EditcryptoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
