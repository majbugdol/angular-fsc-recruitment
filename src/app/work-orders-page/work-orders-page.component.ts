import { Component, OnInit } from '@angular/core';
import { WorkloadService } from '../services/workload.service';

@Component({
  selector: 'app-work-orders-page',
  templateUrl: './work-orders-page.component.html',
  styleUrls: ['./work-orders-page.component.scss'],
})
export class WorkOrdersPageComponent implements OnInit {
  constructor(private workloadService: WorkloadService) {}

  ngOnInit(): void {
    this.workloadService.getData();
  }
}
