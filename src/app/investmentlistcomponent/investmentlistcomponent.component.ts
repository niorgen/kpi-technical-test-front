import { Component, OnInit } from '@angular/core';
import { InvestmentModel } from '../models/investment.model';
import { InvestmentTypeModel } from '../models/investmenttype.model';
import { InvestmentService } from '../services/investment/investment.service';

@Component({
  selector: 'app-investmentlistcomponent',
  templateUrl: './investmentlistcomponent.component.html',
  styleUrls: ['./investmentlistcomponent.component.less']
})
export class InvestmentlistcomponentComponent implements OnInit {
  investments: InvestmentModel[] = []
  investmentState: InvestmentTypeModel[] = []
  investmentsTab: InvestmentModel[] = []
  selectedDevice = ""
  filter=-1
  cityFilter="All"
  filteredResults:InvestmentModel[] = []
  cityList:String[] = []
  constructor(private InvestmentService: InvestmentService) { }


  ngOnInit(): void {
    this.InvestmentService.getInvestmentState().subscribe((states) => {
      this.investmentState = states
      this.InvestmentService.getAllInvestment().subscribe((investments) => {
        this.investments = investments

        this.cityList = []
        this.investments.forEach((investment)=>{
          this.cityList.push(investment.ville)
        })

        this.cityList = Array.from(new Set(this.cityList))

        this.cityList.sort((a, b) => {
          return a[0] > b[0] ? 1 : -1
        })

        this.investmentsTab = investments
        this.investmentsTab.sort((a, b) => {
          return a.id - b.id
        })
      })

    })

  }
  filterByCity(city:string){
    this.cityFilter = city
    this.InvestmentService.getFilteredInvestment(this.cityFilter,this.filter).subscribe({
      next:(res)=>{
        this.investments =res
        this.investmentsTab = res
      },error:(e)=>console.error(e)
    })
  }

  getTypeById(id: number) {
    let state = this.investmentState.find((t) => {
      if (t.id == id) {
        return t.name
      } else {
        return ''
      }
    })
    return state?.name;
  }

  updateInvestmentsView() {
    this.InvestmentService.getAllInvestment().subscribe((investments) => {
      this.investments = investments
    })
  }

  deleteAllInvestments() {
    for (let id = 1200; id < 1700; id++) {
      this.InvestmentService.deleteInvestment(id).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
    }
  }



  
  filterByStatus(filter: any): void {
    this.filter= filter
    this.InvestmentService.getFilteredInvestment(this.cityFilter,this.filter).subscribe({
      next:(res)=>{
        this.investments =res
        this.investmentsTab = res
      },error:(e)=>console.error(e)
    })
  }


}
