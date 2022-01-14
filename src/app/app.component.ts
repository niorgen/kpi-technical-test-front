import { Component } from '@angular/core';
import { InvestmentModel } from './models/investment.model';
import { InvestmentTypeModel } from './models/investmenttype.model';
import { InvestmentService } from './services/investment/investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  investments:InvestmentModel[] = []
  investmentState:InvestmentTypeModel[]=[]
  investmentsTab:InvestmentModel[]=[]

  pageMax : number = 0
  nbPerPage :number = 10
  constructor(private InvestmentService:InvestmentService){}

  ngOnInit(){
    this.InvestmentService.getInvestmentState().subscribe((states)=>{
      this.investmentState = states
      this.InvestmentService.getAllInvestment().subscribe((investments)=>{
        this.investments = investments
        
        
        this.investmentsTab = investments
        this.investmentsTab.sort((a,b)=>{
          return a.id - b.id
        })
        this.investmentsTab = this.investmentsTab.slice(0,10)
        this.pageMax = Math.ceil(this.investments.length / 10)
      })
      
    })

  }
  

  

}
