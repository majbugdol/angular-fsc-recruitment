import { Component, OnInit } from '@angular/core';
import {
  IWorkloadData,
  IWorkOrder,
  WorkloadService,
} from '../services/workload.service';

@Component({
  selector: 'app-work-orders-page',
  templateUrl: './work-orders-page.component.html',
  styleUrls: ['./work-orders-page.component.scss'],
})
export class WorkOrdersPageComponent implements OnInit {
  private workloadData: IWorkloadData;

  constructor(private workloadService: WorkloadService) {}

  public get workOrders(): IWorkOrder[] {
    return this.workloadData.response.data;
  }

  private getData(): void {
    this.workloadService.getData().subscribe((res) => {
      console.log(res);
      this.workloadData = res as IWorkloadData;
    });
  }

  ngOnInit(): void {
    this.getData();
  }
}
