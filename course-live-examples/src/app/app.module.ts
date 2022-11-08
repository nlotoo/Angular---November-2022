import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LecComponentExamplesComponent } from './lec-Components/lec-component-examples/lec-component-examples.component';
import { LecComponetsListUserComponent } from './lec-componets-list-user/lec-componets-list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LecComponentExamplesComponent,
    LecComponetsListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
