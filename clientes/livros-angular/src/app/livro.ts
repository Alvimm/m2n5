export class Livro {

  constructor(
    public codigo: string = '',
    public titulo: string = "",
    public resumo: string = "",
    public autores: string[] = [],
    public codEditora: number = 0,
  ) {
  }
}
