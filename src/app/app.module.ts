import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UtilService } from './services/util.service';
import { registerLocaleData } from '@angular/common';
import ptBr from "@angular/common/locales/pt";

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],
  
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt"
    }
    , UtilService
  ]
})
export class AppModule {}
