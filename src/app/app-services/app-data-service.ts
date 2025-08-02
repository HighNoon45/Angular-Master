import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {inject, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})


export class AppDataService {

  private currentApiUrl: string = environment.primaryApiUrl;
  private availableApiUrls: string[] = environment.apiUrls;
  private http = inject(HttpClient);

  constructor() {
  }

private async findAvailableServer() : Promise<string> {
  for(const url of this.availableApiUrls) {
    try{
      console.log('Gotcha1');
      await firstValueFrom(this.http.get(`${url}/health`));
      return url;
    }
    catch(error){
      console.warn(`Server: ${url} couldn't be reached`)
    }
  }
  throw new Error(`Known Api Servers couldn't be reached`);
}

  public async get<T>(endpoint: string): Promise<T> {
    try {
      console.log('Gotcha2');
      return await firstValueFrom(this.http.get<T>(`${this.currentApiUrl}/${endpoint}`));
    } catch (error) {
      // Try to find alternative server
      try {
        console.log('Gotcha3');
        this.currentApiUrl = await this.findAvailableServer();
        return await firstValueFrom(this.http.get<T>(`${this.currentApiUrl}/${endpoint}`));
      } catch (fallbackError) {
        throw fallbackError;
      }
    }
  }

  public async getById<T>(endpoint: string, id: number): Promise<T> {
    try {
      console.log('Gotcha2');
      return await firstValueFrom(this.http.get<T>(`${this.currentApiUrl}/${endpoint}/${id}`));
    } catch (error) {
      // Try to find alternative server
      try {
        console.log('Gotcha3');
        this.currentApiUrl = await this.findAvailableServer();
        return await firstValueFrom(this.http.get<T>(`${this.currentApiUrl}/${endpoint}/${id}`));
      } catch (fallbackError) {
        throw fallbackError;
      }
    }
  }

  public async put<T>(endpoint: string, data: T): Promise<T> {
    try{
      return await firstValueFrom(this.http.put<T>(`${this.currentApiUrl}/${endpoint}`, data));
    }
    catch(error){
      try{
        this.currentApiUrl = await this.findAvailableServer();
        return await firstValueFrom(this.http.put<T>(`${this.currentApiUrl}/${endpoint}`, data));
      }
      catch(fallbackError) {
        throw fallbackError;
      }
    }
  }
  public async post<T>(endpoint: string, data: T): Promise<T> {
    try {
      return await firstValueFrom(this.http.post<T>(`${this.currentApiUrl}/${endpoint}`, data));
    } catch (error) {
      try {
        this.currentApiUrl = await this.findAvailableServer();
        return await firstValueFrom(this.http.post<T>(`${this.currentApiUrl}/${endpoint}`, data));
      } catch (fallbackError) {
        throw fallbackError;
      }
    }
  }
}
