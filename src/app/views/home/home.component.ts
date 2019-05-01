import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, interval } from 'rxjs';

import { SettingsService } from '../../services/settings.service';
import * as Plotly from 'plotly.js';
import {Config, Data, Layout} from 'plotly.js';
import { PlotlyModule } from 'angular-plotly.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('tempGraph') e1: ElementRef;

  valFireBase = 0;
  tempX = [];
  tempY = [];

  values: any[];

  phX = [];
  phY = [];

  turbX = [];
  turbY = [];

  public tempDataRef = [];
  public phDataRef = [];
  public turbDataRef = [];

  public layout = {
    width: 980, height: 300,
    margin: {l: 40, r: 0, t: 30, b: 40, pad: 0}
  }

  constructor(private db: AngularFireDatabase,
              private service: SettingsService,
              private plotlyPlot: PlotlyModule) {
  }

  ngOnInit() {
    setInterval(() => {
      this.updateGraph();
    }, 1000);
  }

  feedNow() {
    console.log(this.db.object('/').update({feed: true}));
  }

  updateGraph() {
    this.service.getFirebase().subscribe(data => {
      this.values = data;
    })
    this.tempX.push(this.tempX.length + 1);
    this.tempY.push(this.values[7]);
    this.tempDataRef = [
      {
        x: this.tempX,
        y: this.tempY
      }
    ];
    this.phX.push(this.phX.length + 1);
    this.phY.push(this.values[2]);
    this.phDataRef = [
      {
        x: this.phX,
        y: this.phY
      }
    ];
    this.turbX.push(this.tempX.length + 1);
    this.turbY.push(this.values[10]);
    this.turbDataRef = [
      {
        x: this.turbX,
        y: this.turbY
      }
    ];
  }

}
