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
        phoneNo: data[5],
        temperatureMin: data[9],
        temperatureMax: data[8],
        phValueMin: data[4],
        phValueMax: data[3],
        turbidityMin: data[8],
        schedule: data[6],
        feederOpenTime: data[0]
      });
    });
  }

  postFirebase() {
    this.db.object('/').update(this.form.value);
  }

  getFirebase() {
    return this.db.list('/').valueChanges();
  }
}
