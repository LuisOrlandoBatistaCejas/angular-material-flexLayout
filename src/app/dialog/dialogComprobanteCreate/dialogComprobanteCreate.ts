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
  comprobante: ComprobanteModel;
  constructor(
    private dialogRef: MatDialogRef<DialogComprobanteCreateComponent>
  ) {}
  onSubmit() {
    this.comprobante = this.form.value;
    this.dialogRef.close(this.comprobante);
  }
  close() {
    this.dialogRef.close();
  }
}
