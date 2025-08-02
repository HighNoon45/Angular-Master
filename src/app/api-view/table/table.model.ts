/*export class TableModel<T> {
  public headerCells?: HeaderModel<T>;
  public rows: RowModel<T>[] = [];
}*/

export class HeaderModel{
  private readonly isHeader : boolean = true;
  public headerNames : string[] = [];

  constructor(headerNames? : string[]) {}

/*  public setHeaderNames (Cells: CellModel<T>[]) {
    this.cells = Cells;
  }
  public getHeaderNames ():CellModel<T>[] {
    return this.cells;
  }*/
}


export class RowModel<T> {
  public isHeader: boolean = false;
  public rowId?: string;
  public cells?: CellModel<T>;
}

export class CellModel<T>{
  public cells : T[] = [];
  constructor (public Cells: T[]) {
    this.cells = Cells;
  }
}
