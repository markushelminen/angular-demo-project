import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  addressForm: FormGroup = this.initAddressForm();

  constructor(private fb: FormBuilder, private service: FormService) {}

  onSubmit(): void {
    this.addressForm.reset();
  }

  searchForCity() {
    const zipcode: string = this.addressForm.value.zipcode;
    const city: string = zipcode ? this.service.searchForCity(zipcode) : '';
    if(city !== '' && this.addressForm.value.city.length === 0) {
      const cityFormControl = this.addressForm.get('city')
      cityFormControl?.setValue(city)
      cityFormControl?.markAsDirty();
    }
  }

  initAddressForm() {
    return  this.fb.group({
    city: '',
    zipcode: ''
    });
  }
}
