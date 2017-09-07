import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Referral } from '../../interfaces/referral.interface'
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {

  public referrals: Referral[];
  public loaded: boolean = false;

  constructor(private dataService: DataService,    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    this.getReferrals(id);
  }

  getReferrals(id:number) {
    this.dataService.getReferrals(id).subscribe(data => {
      console.log(data);
      this.referrals = data;
      this.loaded = true;
    }

    );

    console.log(id);
  }

}
