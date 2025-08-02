import {IActivity} from '../api-view-models/i-activity';
import {AppDataService} from '../../app-services/app-data-service';
import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})

export class ApiViewRepositoryService {

  public url : string | undefined;
  private readonly appDataService : AppDataService;

  constructor (appDataService : AppDataService) {
    this.appDataService = appDataService;
  }

  public async getAllJSONActivities(urlJson = 'http://localhost:3000/activities') : Promise<IActivity[]> {
    const data = await fetch(urlJson).then((response: Response) => response.json());
    return data;
  }

  public async getAllActivities() : Promise<IActivity[]> {
    return await this.appDataService.get('Activities/List');
  }

  public async updateActivity(activity : IActivity){
    return await this.appDataService.put(`Activities/Update`, activity);
  }

  public async readActivity(id : number) : Promise<any> {
    return await this.appDataService.getById(`Activities/Read`, id);
  }
}
