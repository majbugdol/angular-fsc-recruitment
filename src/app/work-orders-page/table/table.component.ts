import { Component, OnInit, Input } from '@angular/core';
import { IWorkOrder } from 'src/app/services/workload.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() workOrders: IWorkOrder[];

  constructor() {}

  ngOnInit(): void {}
}
