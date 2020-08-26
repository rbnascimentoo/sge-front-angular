export class Response<T> {

  data: T;
  erros: Array<string>;

  constructor(data: T, erros: Array<string>) {
    this.data = data;
    this.erros = erros;
  }

}
