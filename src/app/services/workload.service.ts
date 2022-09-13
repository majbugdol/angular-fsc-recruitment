import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface workloadData {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: string[];
  status: string;
  priority: string;
}
@Injectable({
  providedIn: 'root',
})
export class WorkloadService {
  workload: object[] = [];

  constructor(private http: HttpClient) {}

  getData() {
    const fetchData = this.http.get('assets/data/APIresponse.json').toPromise();
    console.log(fetchData);
    fetchData.then();
  }
}
