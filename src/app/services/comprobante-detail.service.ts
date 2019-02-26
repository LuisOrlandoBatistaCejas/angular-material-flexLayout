import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ComprobanteDetailModel } from '../model/comprobante-detail.model';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ComprobanteDetailService {
  comprobanteDetailList: ComprobanteDetailModel[] = [];
  constructor() {
    this.comprobanteDetailList.push(new ComprobanteDetailModel(664, '1', '1', 'lUIS', 'TRANSPORTE PASAJEROS TABABELA QUITO', 1.00000, 8.00000, 2.01000, 5.99000));
    this.comprobanteDetailList.push(new ComprobanteDetailModel(664, '1792252903001', '002004000587976', 'PTQBPA', 'TRANSPORTE PASAJEROS TABABELA QUITO', 1.00000, 8.00000, 2.01000, 5.99000));
    this.comprobanteDetailList.push(new ComprobanteDetailModel(665, '1792252903001', '002004000587976', 'TODTZ27', 'TRANSPORTE PASAJEROS SECTOR M', 1.00000, 3.00000, 0.00000, 3.00000));
    this.comprobanteDetailList.push(new ComprobanteDetailModel(666, '1792252903001', '003001000586678', 'PQTBPA', 'TRANSPORTE PASAJEROS QUITO TABABELA', 1.00000, 8.00000, 0.01000, 7.99000));
    this.comprobanteDetailList.push(new ComprobanteDetailModel(668, '2290324907001', '001001000001803', '274', 'PLOMO', 3.00000, 10.00000, 3.00000, 30.24000));
    this.comprobanteDetailList.push(new ComprobanteDetailModel(669, '2290324907001', '001001000001803', '413', 'ZINC', 2.00000, 10.00000, 2.00000, 20.16000));
    this.comprobanteDetailList.push(new ComprobanteDetailModel(670, '2290324907001', '001001000001803', '280', 'POTASIO', 3.00000, 10.00000, 3.00000, 30.24000));
  }
  getComprobantes() {
    return this.comprobanteDetailList;
  }
  // getComprobantes() {
  //   return this.http.get('http://api/comprobantes');
  // }
  // insertComprobante(comprobante) {
  //   return this.http.post('http://api/comprobante', comprobante).subscribe();
  // }
}
