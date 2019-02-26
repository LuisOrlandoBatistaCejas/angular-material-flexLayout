import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ComprobanteModel } from '../../model/comprobante.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog-message-create',
  templateUrl: './dialogComprobanteCreate.html',
  styleUrls: ['./dialogComprobanteCreate.css']
})
export class DialogComprobanteCreateComponent {
  @ViewChild('f') form: NgForm;
  message: ComprobanteModel;
  constructor(
    private dialogRef: MatDialogRef<DialogComprobanteCreateComponent>
  ) {}
  onSubmit() {
    this.message = this.form.value;
    this.dialogRef.close(this.message);
  }
  close() {
    this.dialogRef.close();
  }
}
