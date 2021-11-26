import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { ItemsService } from '../items.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Items } from '../items.model';
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
  itemsForm: FormGroup;
  items: Items;
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public itemsService: ItemsService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.isDetails = false;
      this.dialogTitle = data.items.name;
      this.items = data.items;
      this.itemsForm = this.createContactForm();
    } else if (this.action === 'details') {
      this.items = data.items;
      this.isDetails = true;
    } else {
      this.isDetails = false;
      this.dialogTitle = 'Novo Fornecedor';
      this.items = new Items({});
      this.itemsForm = this.createContactForm();
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

      description: [this.items.description],
      measurementUnit: [this.items.measurementUnit],
      value: [this.items.value],
      supplierId: [this.items.supplierId],
      minQuantity: [this.items.minQuantity]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.itemsService.addItems(this.itemsForm.getRawValue());
  }
}
