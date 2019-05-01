import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  editMode = false;

  values: any[];

  constructor(private service: SettingsService) {
    this.service.initializeFormGroup();
  }

  ngOnInit() {
  }

  onDone() {
    this.service.postFirebase();
  }

}
