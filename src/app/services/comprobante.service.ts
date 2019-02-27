import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ComprobanteModel } from '../model/comprobante.model';

@Injectable()
export class ComprobanteService implements OnInit {
  urlComprobante = 'http://127.0.0.1:8000/rest/comprobante/';
  selectedToDelete = new EventEmitter<any>();
  selected: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.selectedToDelete.subscribe(
      (countrie) => {
        this.selected = countrie;
      }
    );
  }
  getAll() {
    return this.http.get(this.urlComprobante);
    //   .pipe()
    //   .subscribe(result => {
    //   console.log(result);
    // });
  }
}
