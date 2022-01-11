import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'kpi-technical-front';
  constructor(private http:HttpClient){
    this.loadInvestments()
  }


  loadInvestments(){
    this.http.get('/api/investment').subscribe((res)=>{
      console.log(res)
    })
  }
}
