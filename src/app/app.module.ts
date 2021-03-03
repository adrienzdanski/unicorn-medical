import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {SearchService} from './core/services/search.service';
import {AppRoutingModule} from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutModule} from './core/layout/layout.module';
import { SearchComponent } from './search/search.component';
import {DashboardTileComponent} from './dashboard/dashboard-tile/dashboard-tile.component';
import {DashboardListComponent} from './dashboard/dashboard-list/dashboard-list.component';
import {LoadingIndicatorComponent} from './shared/loading-indicator/loading-indicator.component';
import {IconLabelComponent} from './shared/icon-label/icon-label.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoadingIndicatorComponent,
    IconLabelComponent,
    DashboardComponent,
    DashboardTileComponent,
    DashboardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
