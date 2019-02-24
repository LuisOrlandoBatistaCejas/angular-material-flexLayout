import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MessageModel } from '../../model/message.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog-comprobante-detail-edit',
  templateUrl: './dialogComprobanteDetailEdit.html',
  styleUrls: ['./dialogComprobanteDetailEdit.css']
})
export class DialogComprobanteDetailEditComponent {
  @ViewChild('f') form: NgForm;
  message: MessageModel;
  constructor(
    private dialogRef: MatDialogRef<DialogComprobanteDetailEditComponent>
  ) {}
  onSubmit() {
    this.message = this.form.value;
    this.dialogRef.close(this.message);
  }
}
