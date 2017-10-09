import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Referral } from '../../../interfaces/referral.interface'

@Component({
  selector: 'app-manage-referrals',
  templateUrl: './manage-referrals.component.html',
  styleUrls: ['./manage-referrals.component.css']

})
export class ManageReferralsComponent implements OnInit {

  public loadedReferrers: boolean = false
  public loadedReferreds: boolean = false
  public referrers: Referral[]
  public referreds: Referral[]

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getReferrers().subscribe(data => {
      this.referrers = data
      console.log(data)
      this.loadedReferrers = true
    });

    this.ds.getReferreds().subscribe(data => {
      this.referreds = data
      console.log(data)
      this.loadedReferreds = true
    })
  }



}
