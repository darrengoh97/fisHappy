import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './componets/navigation/navigation.component';
import { HomeComponent } from './views/home/home.component';
import { SettingsComponent } from './views/settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { StreamComponent } from './views/stream/stream.component';

import {environment} from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatInputModule } from '@angular/material';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SettingsComponent,
    StreamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'FisHappy'),
    AngularFireDatabaseModule,
    PlotlyModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
