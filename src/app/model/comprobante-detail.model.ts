export class ComprobanteDetailModel {
  public id: number;
  public comprobante_Ruc: string; //referencia
  public comprobante_Numero: string; //referencia
  public codigo_principal: string;
  public descripcion: string;
  public cantidad: number;
  public precio: number;
  public descuento: number;
  public total: number;

  constructor(
    id: number, comprobante_Ruc: string, comprobante_Numero: string, codigo_principal: string,
    descripcion: string, cantidad: number, precio: number, descuento: number, total: number) {
    this.id = id;
    this.comprobante_Ruc = comprobante_Ruc;
    this.comprobante_Numero = comprobante_Numero;
    this.codigo_principal = codigo_principal;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
    this.descuento = descuento;
    this.total = total;
  }
}
