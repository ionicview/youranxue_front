import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'app/services/message.service';
import { Observable } from 'rxjs';
import { ChartTestVo } from './../../model/test/chart.test.vo';

@Injectable({
  providedIn: 'root'
})
export class ActsResultService extends BaseService {

  constructor(private http: HttpClient,
    messageService: MessageService) {
    super(messageService);
  }
  public getHeaderData(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/acts/header`);
  }
  public getChartsData(): Observable<ChartTestVo[]> {
    return this.http.get<ChartTestVo[]>(`${this.API_URL}/acts/charts`);
  }
}
