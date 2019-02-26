import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
    return this.http.get(this.urlComprobante).subscribe(
      (object) => console.log(object)
    );
  }

  getComprobante() {
    // return this.http.get('http://api/comprobantes');
  }
  insertComprobante(comprobante) {
    // return this.http.post(this.urlComprobante, comprobante).subscribe();
  }
}
