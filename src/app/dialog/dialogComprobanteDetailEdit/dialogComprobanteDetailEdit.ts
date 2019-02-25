import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ComprobanteDetailModel } from '../../model/comprobante-detail.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog-comprobante-detail-edit',
  templateUrl: './dialogComprobanteDetailEdit.html',
  styleUrls: ['./dialogComprobanteDetailEdit.css']
})
export class DialogComprobanteDetailEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  item: ComprobanteDetailModel;
  comprobanteDetail: ComprobanteDetailModel;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogComprobanteDetailEditComponent>
  ) {}
  ngOnInit() {
    this.item = this.data;
  }
  onSubmit() {
    this.comprobanteDetail = this.form.value;
    this.comprobanteDetail.id = this.data.id;
    this.dialogRef.close(this.comprobanteDetail);
  }
}
