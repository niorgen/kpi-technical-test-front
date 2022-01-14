import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InvestmentModel } from '../models/investment.model';
import { InvestmentService } from '../services/investment/investment.service';

import { NgForm } from '@angular/forms';
import { InvestmentTypeModel } from '../models/investmenttype.model';

@Component({
  selector: 'app-editinvestment',
  templateUrl: './editinvestment.component.html',
  styleUrls: ['./editinvestment.component.less']
})
export class EditinvestmentComponent implements OnInit {
  id: string = ""
  investment: InvestmentModel = new InvestmentModel()
  states: InvestmentTypeModel[] = []

  requiredField:Boolean = false;
  
  constructor(private route: ActivatedRoute, private InvestmentService: InvestmentService) {

    // subscribe to router event


  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.InvestmentService.getInvestment(id).subscribe({
        next: (res) => {
          this.investment = res

          this.InvestmentService.getInvestmentState().subscribe({
            next: (states) => {
              this.states = states
            }
          })

        }, error: (e) => console.error(e)
      })
    } else {
      console.log('param id not found')
    }
  }

  modifyInvestment(form: InvestmentModel) {
    let isFormValid = true
    this.requiredField = false

    Object.values(form).forEach((val) => {
      if (val == '') {
        console.log('error form required field')
        isFormValid = false
      }
    })

    if (isFormValid) {
      this.InvestmentService.updateInvestment(form).subscribe({
        next: (res) => {
          console.log(res)
        }, error: (e) => console.error(e)
      })
    }else{
      this.requiredField = true
    }
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }
}
