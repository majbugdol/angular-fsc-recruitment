import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IWorkloadData {
  exec_time: number;
  response: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
    data: IWorkOrder[];
  };
}

export interface IWorkOrder {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: [
    {
      person_name: string;
      status: string;
    }
  ];
  status: string;
  priority: string;
}

@Injectable({
  providedIn: 'root',
})
export class WorkloadService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<Object> {
    const fetchData = this.http.get('assets/data/APIresponse.json');
    return fetchData;
  }
}
