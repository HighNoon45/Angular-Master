import { Component } from '@angular/core';
import {HeaderModel, RowModel, CellModel} from '../table.model';

@Component({
  selector: 'app-api-view-table-header',
  imports: [],
  template: `
      <div class="head-title head-title-id">{{id}}</div>
      <div class="head-title head-title-name">{{name}}</div>
      <div class="head-title head-title-description">{{description}}</div>
      <div class="head-title head-title-type">{{type}}</div>
  `,

  styles: `
    .head-title{
      border:  solid darkgray;
      border-width: 0px 1px 0px 1px;
      margin-right: 10px;
      text-align: center;
      color: rgb(177 177 177 0.5);
    }
    .head-title-id{
      flex: 0.4;
    }
    .head-title-name{
      flex: 0.6;
    }
    .head-title-description{
      flex: 1.8;
    }
    .head-title-type{
      flex: 1;
    }
  `
})

export class ApiViewTableHeaderComponent {
  protected id : string;
  protected name: string;
  protected description: string;
  protected type : string;

  constructor(activityHeaderNames: CellModel<string>) {

    this.id = activityHeaderNames.cells[0];
    this.name = activityHeaderNames.cells[1];
    this.description = activityHeaderNames.cells[2];
    this.type = activityHeaderNames.cells[3];
  }
}
