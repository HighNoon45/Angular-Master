import {Component, input, InputSignal} from '@angular/core';
import {IActivity} from '../../api-view-models/i-activity';
import {ApiViewTableComponent} from '../table.component';
import {RowModel, TableModel} from '../table.model';


@Component({
  selector: 'app-api-view-table-rows',
  imports: [],
  template: `
    <div class="activity-element d-flex flex-row">
    <div type="text" class="activity-property activity-element-id">{{ rowObject().cellModel.cells.activityId }}</div>
    <div type="text" class="activity-property activity-element-name" [textContent]="rowObject().cellModel.cells.activityName"></div>
    <div type="text" class="activity-property activity-element-description">{{ rowObject().cellModel.cells.activityDescription }}</div>
    <div type="text" class="activity-property activity-element-type">{{ rowObject().cellModel.cells.activityType }}</div>
  </div>` ,
  styleUrl: './api-view-table-rows.component.less'
})
export class ApiViewTableRowsComponent {
  rowObject : InputSignal<RowModel<IActivity>> = input.required<RowModel<IActivity>>();
  constructor() {

  }
}
