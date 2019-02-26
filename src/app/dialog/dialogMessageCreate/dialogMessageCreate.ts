import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ComprobanteModel } from '../../model/comprobante.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog-message-create',
  templateUrl: './dialogMessageCreate.html',
  styleUrls: ['./dialogMessageCreate.css']
})
export class DialogMessageCreateComponent {
  @ViewChild('f') form: NgForm;
  message: ComprobanteModel;
  constructor(
    private dialogRef: MatDialogRef<DialogMessageCreateComponent>
  ) {}
  onSubmit() {
    this.message = this.form.value;
    this.dialogRef.close(this.message);
  }
  close() {
    this.dialogRef.close();
  }
}
