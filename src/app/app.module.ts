import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/main/menu/menu.component';
import { ContentComponent } from './component/main/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ApifeedbackComponent } from './component/main/apifeedback/apifeedback.component';
import { MessagefeedbackComponent } from './component/main/messagefeedback/messagefeedback.component';
import { MenubuttonComponent } from './component/helper/menubutton/menubutton.component';
import { VideoComponent } from './page/video/video.component';
import { MagicComponent } from './page/magic/magic.component';
import { LoginComponent } from './page/login/login.component';
import { LogoutComponent } from './component/main/logout/logout.component';
import { SelectfieldComponent } from './component/helper/selectfield/selectfield.component';
import { VideoplayerComponent } from './component/main/videoplayer/videoplayer.component';
import { VideofilterComponent } from './component/main/videofilter/videofilter.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    ApifeedbackComponent,
    MessagefeedbackComponent,
    MenubuttonComponent,
    VideoComponent,
    MagicComponent,
    LoginComponent,
    LogoutComponent,
    SelectfieldComponent,
    VideoplayerComponent,
    VideofilterComponent
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
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
