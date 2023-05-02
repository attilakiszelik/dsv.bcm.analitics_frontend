import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagesListComponent } from './usages-list.component';

describe('UsagesListComponent', () => {
  let component: UsagesListComponent;
  let fixture: ComponentFixture<UsagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsagesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
