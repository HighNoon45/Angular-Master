import {Component, input} from '@angular/core';
import {ApiViewTableHeaderComponent} from './api-view-table-header/api-view-table-header.component';
import {CellModel, HeaderModel, RowModel} from './table.model';
import {ApiViewTableRowsComponent} from './api-view-table-rows/api-view-table-rows.component';
import {IActivity} from '../api-view-models/i-activity';

@Component({
  selector: 'app-activity-table',
  imports: [
    ApiViewTableHeaderComponent
  ],
  template: `
    <app-api-view-table-header class="activity-elements-headline d-flex flex-row"></app-api-view-table-header>
    @for(activity of activityList; track  $index){
      <app-activity-table [activityElement]="activityTableRows"></app-activity-table>
    }
  `,

  styles: `
    .activity-elements-headline{
      margin-bottom: 8px;
    }
  `
})
export class ActivityTableComponent {
private  TableHeader: HeaderModel = new HeaderModel(["ID", "Name","Description","Type"]);
private apiViewTableHeaderComponent: ApiViewTableHeaderComponent = new ApiViewTableHeaderComponent(this.TableHeader);

protected TableRows: RowModel;
private apiViewTableRowsComponent: ApiViewTableRowsComponent = new ApiViewTableRowsComponent();

constructor(public HeaderModel: HeaderModel, public RowModel:RowModel,private ApiViewTableHeaderComponent: ApiViewTableHeaderComponent, private ApiViewTableRowsComponent:ApiViewTableRowsComponent) {
  this.ApiViewTableHeaderComponent = this.apiViewTableHeaderComponent;
  this.ApiViewTableRowsComponent = this.apiViewTableRowsComponent;
  this.activityTableHeader = HeaderModel;
  this.TableRows = RowModel;
  }
}
