import { Component, Input, OnChanges } from '@angular/core';
import { IWorkOrder } from 'src/app/services/workload.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() workOrders: IWorkOrder[] = [];
  // dataSource2 = new MatTableDataSource(table);

  public displayedColumns: string[] = [
    'work_order_id',
    'description',
    'received_date',
    'assigned_to',
    'status',
    'priority',
  ];

  public dataSource: IWorkOrder[];

  constructor() {}

  ngOnChanges(): void {
    this.dataSource = this.workOrders;
  }
}
