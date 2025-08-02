export class TableModel<T> {
  public headerCells?: HeaderModel;
  public rows: RowModel<T>[] = [];
}

export class HeaderModel {
  private readonly isHeader: boolean = true;
  public headerNames: string[] = [];

  constructor(headerNames?: string[]) {
  }
}

export class RowModel<T> {
  public isHeader: boolean = false;
  public rowId?: string;
  public cellModel?: CellModel<T>;
}

export class CellModel<T>{
  public cells : T;
  constructor (public Cells: T) {
    this.cells = Cells;
  }
}
