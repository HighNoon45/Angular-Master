import {Component, input, InputSignal} from '@angular/core';
import {IActivity} from '../../api-view-models/i-activity';
import {ActivityTableComponent} from '../activity-table.component';


@Component({
  selector: 'app-api-view-table-rows',
  imports: [],
  template: `
    <div class="activity-element d-flex flex-row">
    <div type="text" class="activity-property activity-element-id">{{ activityElement().activityId }}</div>
    <div type="text" class="activity-property activity-element-name" [textContent]="activityElement().activityName"></div>
    <div type="text" class="activity-property activity-element-description">{{ activityElement().activityDescription }}</div>
    <div type="text" class="activity-property activity-element-type">{{ activityElement().activityType }}</div>
  </div>` ,
  styleUrl: './api-view-table-rows.component.less'
})
export class ApiViewTableRowsComponent {
  activityElement : InputSignal<IActivity> = input.required<IActivity>();
  constructor() {
  }
}
