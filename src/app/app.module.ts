import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './components/rxjstest/test1/test1.component';
import { AdminhomeComponent } from './components/dashboard/adminhome/adminhome.component';
import { TesterhomeComponent } from './components/dashboard/testerhome/testerhome.component';
import { GeneralmessageComponent } from './components/shared/generalmessage/generalmessage.component';
import { ErrormessageComponent } from './components/shared/errormessage/errormessage.component';
import { AlltestsComponent } from './components/tests/alltests/alltests.component';
import { ViewtestComponent } from './components/tests/viewtest/viewtest.component';
import { ViewresultsComponent } from './components/results/viewresults/viewresults.component';
import { ViewresultComponent } from './components/results/viewresult/viewresult.component';
import { MarkresultComponent } from './components/results/markresult/markresult.component';
import { TestprogressComponent } from './components/reports/admin/testprogress/testprogress.component';
import { QscoreComponent } from './components/reports/admin/qscore/qscore.component';
import { MytestsComponent } from './components/reports/tester/mytests/mytests.component';
import { MyresultsComponent } from './components/reports/tester/myresults/myresults.component';
import { MyaisComponent } from './components/reports/tester/myais/myais.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    AdminhomeComponent,
    TesterhomeComponent,
    GeneralmessageComponent,
    ErrormessageComponent,
    AlltestsComponent,
    ViewtestComponent,
    ViewresultsComponent,
    ViewresultComponent,
    MarkresultComponent,
    TestprogressComponent,
    QscoreComponent,
    MytestsComponent,
    MyresultsComponent,
    MyaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
