import { Component, Input, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  @Input() fund: Fund = {};
  mensaje: string = "welcome to tuesday";

  constructor(private fundService: FundService) { }

  funds:Fund[] = [];

  ngOnInit(): void {
    this.fundService.getFunds().subscribe(payload =>{
      this.funds = payload;
    })
  }

}
