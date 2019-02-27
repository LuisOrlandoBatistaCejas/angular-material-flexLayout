export class ComprobanteDetailModel {
  public id: number;
  public ruc: string; //referencia
  public numero: string; //referencia
  public codigo_principal: string;
  public descripcion: string;
  public cantidad: number;
  public precio: number;
  public descuento: number;
  public total: number;

  constructor(
    id: number, ruc: string, numero: string, codigo_principal: string,
    descripcion: string, cantidad: number, precio: number, descuento: number, total: number) {
    this.id = id;
    this.ruc = ruc;
    this.numero = numero;
    this.codigo_principal = codigo_principal;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
    this.descuento = descuento;
    this.total = total;
  }
}
