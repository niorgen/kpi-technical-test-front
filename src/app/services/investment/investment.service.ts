import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,catchError, throwError, of } from 'rxjs';
import { InvestmentModel } from 'src/app/models/investment.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { InvestmentTypeModel } from 'src/app/models/investmenttype.model';

@Injectable({
  providedIn: 'root'
})

export class InvestmentService {

  constructor(private httpService:HttpClient) { }


  public getAllInvestment(): Observable<InvestmentModel[]> {
    return this.httpService.get<InvestmentModel[]>(environment.apiUrl+'investment/').pipe(
      map(data => data.map(data => new InvestmentModel().deserialize(data)))
    );
  }


  public getFilteredInvestment(city:string,state:number):Observable<InvestmentModel[]>{
    let url = environment.apiUrl+'investment/'
    console.log("filter : " + city + " / " + state)
    
    if(city != "" && city != 'All' && state>0){
      url += "?ville="+city+"&etat_d_avancement="+state
    }else{
      if(city != "" && city != "All"){
        url += "?ville="+city
      }
      if(state > 0){
        url += "?etat_d_avancement="+state
      }
    }
    console.log(url)
    return this.httpService.get<InvestmentModel[]>(url).pipe(
      map(data => data.map(data => new InvestmentModel().deserialize(data)))
    );

  }
    
  public getInvestment(id: string): Observable<InvestmentModel> {
    return this.httpService.get<InvestmentModel>(environment.apiUrl+'investment/'+id).pipe(
      map(data => new InvestmentModel().deserialize(data))
    );
  }

  public updateInvestment(investment:InvestmentModel):Observable<any>{
    console.log('update Investment')
    return this.httpService.put<any>(environment.apiUrl+'investment/'+investment.id+'/',investment)

  }

  public deleteInvestment(id:number):Observable<any>{
    return this.httpService.delete(environment.apiUrl+'investment/'+id+'/');
  }

  public getInvestmentState():Observable<InvestmentTypeModel[]>{
    return this.httpService.get<InvestmentTypeModel[]>(environment.apiUrl+'investment-state/').pipe(
      map(data => data.map(data => new InvestmentTypeModel().deserialize(data)))
    );
  }

  public postInvestments(investment:InvestmentModel): Observable<any> {
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpService.post(environment.apiUrl+'investment/', JSON.stringify(investment),httpOptions);
    
  }
  

}
