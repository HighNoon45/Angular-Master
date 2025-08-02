import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ApiViewTableComponent} from './table/table.component';
import {IActivity} from './api-view-models/i-activity';
import {ApiViewRepositoryService} from './api-view-services/api-view-repository.service';
import {AppDataService} from '../app-services/app-data-service';
import {ApiViewCrudlFormComponent} from './api-view-crudl-form/api-view-crudl-form.component';
import {ApiViewTableHeaderComponent} from './table/api-view-table-header/api-view-table-header.component';


@Component({
  selector: 'app-api-view',
  imports: [
    NgOptimizedImage,
    ApiViewTableComponent,
    ApiViewCrudlFormComponent,
    ApiViewTableHeaderComponent
  ],
  templateUrl: './api-view.component.html',
  providers: [ApiViewRepositoryService, AppDataService],
  styleUrl: './api-view.component.less'
})
export class ApiViewComponent {
  public activityList: IActivity[] = [];
  private appData: AppDataService;
  private apiViewRepositoryService : ApiViewRepositoryService;

  constructor(appData: AppDataService) {
    this.appData = appData;
    this.apiViewRepositoryService = new ApiViewRepositoryService(this.appData);

    this.apiViewRepositoryService.getAllActivities()
      .then((response: IActivity[])=> this.activityList = response);

    const activity : IActivity = {activityId:1,activityName:"namedInstance",activityDescription:"Zuzu",activityType:"reliant"}
    this.apiViewRepositoryService.updateActivity(activity);

    console.log(this.apiViewRepositoryService.readActivity(1),"Test my read Activity");
  }
}
