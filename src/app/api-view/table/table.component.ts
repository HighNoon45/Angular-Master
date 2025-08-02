import {Component, input, InputSignal} from '@angular/core';
import {ApiViewTableHeaderComponent} from './api-view-table-header/api-view-table-header.component';
import {CellModel, HeaderModel, RowModel} from './table.model';
import {ApiViewTableRowsComponent} from './api-view-table-rows/api-view-table-rows.component';
import {IActivity} from '../api-view-models/i-activity';

@Component({
  selector: 'app-api-view-table',
  imports: [
    ApiViewTableHeaderComponent
  ],
  template: `
    <app-api-view-table-header class="activity-elements-headline d-flex flex-row"></app-api-view-table-header>
    @for(object of objectList; track  $index){
      <app-api-view-table [rowObject]="TableRows"></app-api-view-table>
    }
  `,

  styles: `
    .activity-elements-headline{
      margin-bottom: 8px;
    }
  `
})
export class ApiViewTableComponent {
private  TableHeader: HeaderModel = new HeaderModel(["ID", "Name","Description","Type"]);
private apiViewTableHeaderComponent: ApiViewTableHeaderComponent = new ApiViewTableHeaderComponent(this.TableHeader);

protected TableRows: RowModel<IActivity>;
private apiViewTableRowsComponent: ApiViewTableRowsComponent = new ApiViewTableRowsComponent();

constructor(public HeaderModel: HeaderModel, public RowModel:RowModel<IActivity>,private ApiViewTableHeaderComponent: ApiViewTableHeaderComponent, private ApiViewTableRowsComponent:ApiViewTableRowsComponent) {
  this.ApiViewTableHeaderComponent = this.apiViewTableHeaderComponent;
  this.ApiViewTableRowsComponent = this.apiViewTableRowsComponent;
  this.TableHeader = HeaderModel;
  this.TableRows = RowModel;
  }
}
