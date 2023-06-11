import { Component } from '@angular/core';
import {chartData} from './data'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  public data: object[] = chartData;
  public crosshairSettings: object = { enable: true }
  public xAxis: object = { crosshairTooltip:{ enable: true }}
  public tooltipOptions = { enable: true }
}
