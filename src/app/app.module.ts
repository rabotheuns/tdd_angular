import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { TaxService } from './tax-service.service';
import {HttpClientModule} from "@angular/common/module.d-CnjH8Dlt";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TaxService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
