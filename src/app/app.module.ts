import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing.module';
import { RockComponent } from './genres/components/rock/rock.component';

@NgModule({
  declarations: [AppComponent, RockComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: 'BASE_URL', useFactory: () => environment.apiUrl },
    { provide: 'ATOKEN', useFactory: () => environment.apiToken },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
