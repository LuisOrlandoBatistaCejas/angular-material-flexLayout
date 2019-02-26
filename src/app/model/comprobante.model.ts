export class ComprobanteModel {
  public Ruc: string;
  public Numero: string;
  public identificacion: string;
  public fecha: string;
  public direccion: string;
  public telefono: string;
  public email: string;
  public subtotal: string;
  public descuento: string;
  public iva: string;
  public total: string;
  public anulada: string;

  constructor(
    Ruc: string, Numero: string, identificacion: string, fecha: string, direccion: string, telefono: string,
    email: string, subtotal: string, descuento: string, iva: string, total: string, anulada: string) {
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

// export class ComprobanteModel {
//   public id: number;
//   public ruc: string;
//   public numero: string;
//   public identificacion: string;
//   public fecha: string;
//   public direccion: string;
//   public telefono: string;
//   public email: string;
//   public subtotal: string;
//   public descuento: string;
//   public iva: string;
//   public total: string;
//   public anulada: string;
//
//   constructor(
//     id: number, ruc: string, numero: string, identificacion: string, fecha: string, direccion: string, telefono: string,
//     email: string, subtotal: string, descuento: string, iva: string, total: string, anulada: string) {
//     this.id = id;
//     this.ruc = ruc;
//     this.numero = numero;
//     this.identificacion = identificacion;
//     this.fecha = fecha;
//     this.direccion = direccion;
//     this.telefono = telefono;
//     this.email = email;
//     this.subtotal = subtotal;
//     this.descuento = descuento;
//     this.iva = iva;
//     this.total = total;
//     this.anulada = anulada;
//   }
// }
