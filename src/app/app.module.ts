import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomComponent } from './dashboard/custom/custom.component';
import { DefaultComponent } from './dashboard/default/default.component';

import { TodaySummaryComponent } from './dashboard/sections/today-summary/today-summary.component';
import { AssetOverviewComponent } from './dashboard/sections/asset-overview/asset-overview.component';
import { NetworkOverviewComponent } from './dashboard/sections/network-overview/network-overview.component';

import { DashboardgridComponent } from './dashboard/dashboardgrids/dashboardgrid/dashboardgrid.component';
import { Dashboardgrid2Component } from './dashboard/dashboardgrids/dashboardgrid2/dashboardgrid2.component';

import { searchComponent } from './search/search.component';
import { SearchResultComponent } from './search/search-result/search-result.component';

import { tableComponent } from './table/table.component';
import { tablecellComponent } from './table/tablecells/tablecell/tablecell.component';
import { tablecell2Component } from './table/tablecells/tablecell2/tablecell2.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    DefaultComponent,
    TodaySummaryComponent,
    AssetOverviewComponent,
    searchComponent,
    DashboardgridComponent,
    Dashboardgrid2Component,
    SearchResultComponent,
    tableComponent,
    tablecellComponent,
    tablecell2Component,
    NetworkOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
