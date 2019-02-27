import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ComprobanteDetailModel } from '../../model/comprobante-detail.model';
import { ComprobanteModel } from '../../model/comprobante.model';
import { ComprobanteDetailService } from '../../services/comprobante-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog-comprobante-detail-create',
  templateUrl: './dialogComprobanteDetailCreate.html',
  styleUrls: ['./dialogComprobanteDetailCreate.css']
})
export class DialogComprobanteDetailCreateComponent implements OnInit{
  @ViewChild('f') form: NgForm;
  comprobanteDetail: ComprobanteDetailModel;
  comprobanteList: ComprobanteModel[];
  constructor(
    private dialogRef: MatDialogRef<DialogComprobanteDetailCreateComponent>,
    private comprobanteDetailService: ComprobanteDetailService
  ) {}
  ngOnInit() {
    this.comprobanteList = this.comprobanteDetailService.comprobanteList;
  }
  onSubmit() {
    this.comprobanteDetail = this.form.value;
    this.dialogRef.close(this.comprobanteDetail);
  }
}
