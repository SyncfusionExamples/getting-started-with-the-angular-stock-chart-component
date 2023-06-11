import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockChartModule, CandleSeriesService, DateTimeService, CrosshairService, TooltipService, RangeTooltipService} from '@syncfusion/ej2-angular-charts';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockChartModule
  ],
  providers: [CandleSeriesService, DateTimeService, CrosshairService, TooltipService, RangeTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
