import { Component } from '@angular/core';
import {chartData} from './data'
import { StockChartModule, CandleSeriesService, DateTimeService, CrosshairService, TooltipService, RangeTooltipService} from '@syncfusion/ej2-angular-charts';


@Component({
  selector: 'app-root',
  imports: [StockChartModule],
  providers: [CandleSeriesService, DateTimeService, CrosshairService, TooltipService, RangeTooltipService],
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
