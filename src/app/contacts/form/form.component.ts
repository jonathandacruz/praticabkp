import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { ContactsService } from '../contacts.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Contacts } from '../contacts.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  action: string;
  dialogTitle: string;
  isDetails = false;
  contactsForm: FormGroup;
  contacts: Contacts;
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public contactsService: ContactsService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.isDetails = false;
      this.dialogTitle = data.contacts.name;
      this.contacts = data.contacts;
      this.contactsForm = this.createContactForm();
    } else if (this.action === 'details') {
      this.contacts = data.contacts;
      this.isDetails = true;
    } else {
      this.isDetails = false;
      this.dialogTitle = 'Novo Fornecedor';
      this.contacts = new Contacts({});
      this.contactsForm = this.createContactForm();
    }
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): FormGroup {
    return this.fb.group({

      name: [this.contacts.name],
      inCharge: [this.contacts.inCharge],
      cnpj: [this.contacts.cnpj],
      stateIdentifier: [this.contacts.stateIdentifier]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.contactsService.addContacts(this.contactsForm.getRawValue());
  }
}
