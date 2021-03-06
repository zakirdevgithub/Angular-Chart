import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: Object[];
  public xAxis:Object;
  public yAxis: Object;
  public chartTitle: string;
  public legend: Object;
  public markerSettings: Object;
  public tooltipSettings:Object;
  constructor(){
    this.chartTitle='Sales Analysis';
    this.data=[
      {month: 'Jan', sales: 35}, { month: 'Feb', sales: 28},
      {month: 'Mar', sales: 34}, { month: 'Apr', sales: 32},
      {month: 'May', sales: 40}, { month: 'Jun', sales: 32},
      {month: 'Jul', sales: 35}, { month: 'Aug', sales: 55},
      {month: 'Sep', sales: 38}, { month: 'Oct', sales: 30},
      {month: 'Nov', sales: 25}, { month: 'Dec', sales: 32}
    ];

    this.tooltipSettings={
      enable: true
    };
    this.markerSettings={
      dataLabel:{
        visible: true
      }
    };
    this.legend={
      visible: true
    };
    this.xAxis={
      title : 'Month',
      valueType: 'Category'
    };
    this.yAxis={
      title: 'Sales'
    }
  }
 
}
