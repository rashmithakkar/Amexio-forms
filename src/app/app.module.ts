import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmexioWidgetModule } from 'amexio-ng-extensions'; 
import { AppComponent } from './app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformsComponent,
    TemplatedrivenComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, AmexioWidgetModule, ReactiveFormsModule, RouterModule.forRoot([
      { path: "", component: ReactiveformsComponent },
      { path: 'templatedriven', component: TemplatedrivenComponent},
      { path: 'reactiveforms', component: ReactiveformsComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
