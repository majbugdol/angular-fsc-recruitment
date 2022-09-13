import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './work-orders-page/table/table.component';
import { FilterComponent } from './work-orders-page/filter/filter.component';
import { WorkOrdersPageComponent } from './work-orders-page/work-orders-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterComponent,
    WorkOrdersPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
