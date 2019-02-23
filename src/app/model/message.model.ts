export class MessageModel {
  public from: string;
  public subject: string;
  public content: string;

  constructor(from: string, subject: string, content: string) {
    this.from = from;
    this.subject = subject;
    this.content = content;
  }
}
