import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DebounceComponent } from './exercise/debounce/debounce.component';
import { FormsComponent } from './exercise/forms/forms.component';
import { PipesComponent } from './exercise/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DebounceComponent,
    FormsComponent,
    PipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
