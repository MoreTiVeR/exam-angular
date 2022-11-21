import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public form: FormGroup;
  unsubcribe: any;
  radioGroup: any;

  public fields: any[] = [
    {
      "id": "name",
      "label": "Name",
      "value": "",
      "type": "text"
    },
    {
      "id": "email",
      "label": "E-Mail",
      "value": "",
      "type": "text"
    },
    {
      "id": "gender",
      "label": 'Gender',
      //"value": 'm',
      "type": 'radio',
      "options": [
        { key: 'm', name: 'Gender', label: 'Male' },
        { key: 'f', name: 'Gender', label: 'Female' }
        // {id: '1', name: 'Gender', label: 'Male'},
        // {id: '2', name: 'Gender', label: 'Female'}
      ]
    }
  ];

  constructor() {
    console.log('initial form');
    console.log(this.fields);
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }
	
  onUpload(e: any) {
    console.log('onUpload' + e);

  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
