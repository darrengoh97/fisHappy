import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(public db: AngularFireDatabase) {
  }

  form: FormGroup = new FormGroup({
    phoneNo: new FormControl(''),
    temperatureMin: new FormControl(''),
    temperatureMax: new FormControl(''),
    phValueMin: new FormControl(''),
    phValueMax: new FormControl(''),
    turbidityMin: new FormControl(''),
    schedule: new FormControl(''),
    feederOpenTime: new FormControl('')
  });

  initializeFormGroup() {
    this.getFirebase().subscribe(data => {
      this.form.setValue({
        phoneNo: data[6],
        temperatureMin: data[10],
        temperatureMax: data[9],
        phValueMin: data[5],
        phValueMax: data[4],
        turbidityMin: data[9],
        schedule: data[7],
        feederOpenTime: data[1]
      });
    });

    console.log(this.form.value);
  }

  postFirebase() {
    this.db.object('/').update(this.form.value);
  }

  getFirebase() {
    return this.db.list('/').valueChanges();
  }
}
