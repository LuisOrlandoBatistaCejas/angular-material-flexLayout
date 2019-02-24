import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MessageModel } from '../../model/message.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog-comprobante-detail-create',
  templateUrl: './dialogComprobanteDetailCreate.html',
  styleUrls: ['./dialogComprobanteDetailCreate.css']
})
export class DialogComprobanteDetailCreateComponent {
  @ViewChild('f') form: NgForm;
  message: MessageModel;
  constructor(
    private dialogRef: MatDialogRef<DialogComprobanteDetailCreateComponent>
  ) {}
  onSubmit() {
    this.message = this.form.value;
    this.dialogRef.close(this.message);
  }
}
