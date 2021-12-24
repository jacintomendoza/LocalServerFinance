import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from './fund.model';

// Decorator, what do we call it = selector.
// templateUrl = where to find it
// styleUrls = specifies CSS
@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  // fund:Fund = {};

  @Input() fund: Fund = {};
  @Input() message: string = "";

  constructor(private route:ActivatedRoute, private fundService: FundService) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params=>{
    //   const myid = +params['id'];
    //   this.fundService.getFund(myid).subscribe(payload=>{
    //     console.log(payload);
    //     this.fund = payload;
    //   })
    // })
  }

  

}
