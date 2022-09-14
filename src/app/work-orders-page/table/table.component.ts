import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IWorkOrder } from 'src/app/services/workload.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges, OnInit {
  @Input() workOrders: IWorkOrder[] = [];
  // dataSource2 = new MatTableDataSource(table);

  public displayedColumns: string[] = [
    'work_order_id',
    'description',
    'received_date',
    'assigned_to_person_name',
    'assigned_to_status',
    'status',
    'priority',
  ];

  public displayAssignedToPersonName(element: IWorkOrder): string {
    let assignedToString = '';
    if (element.assigned_to.length) {
      if (element.assigned_to.length === 1) {
        return (assignedToString = element.assigned_to[0].person_name);
      }
      for (let i = 0; i < element.assigned_to.length; i++) {
        if (i < element.assigned_to.length - 1) {
          assignedToString = `${element.assigned_to[i].person_name},  ${assignedToString}`;
        } else if ((i = element.assigned_to.length - 1)) {
          assignedToString = `${assignedToString} ${element.assigned_to[i].person_name}`;
        }
      }
      return assignedToString;
    } else return '-';
  }

  public displayAssignedToStatus(element: IWorkOrder): string {
    let assignedToString = '';
    if (element.assigned_to.length) {
      if (element.assigned_to.length === 1) {
        return (assignedToString = element.assigned_to[0].status);
      }
      for (let i = 0; i < element.assigned_to.length; i++) {
        if (i < element.assigned_to.length - 1) {
          assignedToString = `${element.assigned_to[i].status},  ${assignedToString}`;
        } else if ((i = element.assigned_to.length - 1)) {
          assignedToString = `${assignedToString} ${element.assigned_to[i].status}`;
        }
      }
      return assignedToString;
    } else return '-';
  }

  public dataSource = new MatTableDataSource(this.workOrders);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() {}

  ngOnInit(): void {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.description.toLowerCase().includes(filter);
    };
  }
  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.workOrders);
  }
}
