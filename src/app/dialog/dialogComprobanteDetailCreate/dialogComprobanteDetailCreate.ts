import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ComprobanteDetailModel } from '../../model/comprobante-detail.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog-comprobante-detail-create',
  templateUrl: './dialogComprobanteDetailCreate.html',
  styleUrls: ['./dialogComprobanteDetailCreate.css']
})
export class DialogComprobanteDetailCreateComponent {
  @ViewChild('f') form: NgForm;
  comprobanteDetail: ComprobanteDetailModel;
  constructor(
    private dialogRef: MatDialogRef<DialogComprobanteDetailCreateComponent>
  ) {}
  onSubmit() {
    this.comprobanteDetail = this.form.value;
    this.dialogRef.close(this.comprobanteDetail);
  }
}
