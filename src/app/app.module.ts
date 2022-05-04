import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/main/menu/menu.component';
import { ContentComponent } from './component/main/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ApifeedbackComponent } from './component/main/apifeedback/apifeedback.component';
import { MessagefeedbackComponent } from './component/main/messagefeedback/messagefeedback.component';
import { MenubuttonComponent } from './component/helper/menubutton/menubutton.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    ApifeedbackComponent,
    MessagefeedbackComponent,
    MenubuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
