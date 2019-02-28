import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-use',
  templateUrl: './form-use.component.html',
  styleUrls: ['./form-use.component.scss']
})

export class FormUseComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    secondName: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit() {
    // this.profileForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   secondName: new FormControl(''),
    // })
  }

  onSubmit() {
    console.log(this.profileForm, 'profileFormData');
  }

}
