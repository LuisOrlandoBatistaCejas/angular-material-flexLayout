export class MessageModel {
  public id: number;
  public from: string;
  public subject: string;
  public content: string;

  constructor(id: number, from: string, subject: string, content: string) {
    this.id = id;
    this.from = from;
    this.subject = subject;
    this.content = content;
  }
}
