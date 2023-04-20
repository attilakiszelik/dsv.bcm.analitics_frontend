import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupporthoursListComponent } from './supporthours-list.component';

describe('ReportrowListComponent', () => {
  let component: SupporthoursListComponent;
  let fixture: ComponentFixture<SupporthoursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupporthoursListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupporthoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
