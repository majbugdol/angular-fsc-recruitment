import { Component, OnInit } from '@angular/core';
import { IWorkloadData, WorkloadService } from '../services/workload.service';

@Component({
  selector: 'app-work-orders-page',
  templateUrl: './work-orders-page.component.html',
  styleUrls: ['./work-orders-page.component.scss'],
})
export class WorkOrdersPageComponent implements OnInit {
  public workloadData: IWorkloadData;

  constructor(private workloadService: WorkloadService) {}

  private getData(): void {
    this.workloadService.getData().subscribe(
      (res) => {
        this.workloadData = res as IWorkloadData;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.getData();
  }
}
