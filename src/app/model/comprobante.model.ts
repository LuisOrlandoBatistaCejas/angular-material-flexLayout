export class ComprobanteModel {
  public Ruc: string;
  public Numero: string;
  public identificacion: string;
  public fecha: string;
  public direccion: string;
  public telefono: string;
  public email: string;
  public subtotal: number;
  public descuento: number;
  public iva: number;
  public total: number;
  public anulada: number;

  constructor(
    Ruc: string, Numero: string, identificacion: string, fecha: string, direccion: string, telefono: string,
    email: string, subtotal: number, descuento: number, iva: number, total: number, anulada: number) {
    this.Ruc = Ruc;
    this.Numero = Numero;
    this.identificacion = identificacion;
    this.fecha = fecha;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
    this.subtotal = subtotal;
    this.descuento = descuento;
    this.iva = iva;
    this.total = total;
    this.anulada = anulada;
  }
}
