import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersPageComponent } from './work-orders-page.component';

describe('WorkOrdersPageComponent', () => {
  let component: WorkOrdersPageComponent;
  let fixture: ComponentFixture<WorkOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkOrdersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
