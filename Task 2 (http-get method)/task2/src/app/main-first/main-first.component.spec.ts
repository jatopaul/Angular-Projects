import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFirstComponent } from './main-first.component';

describe('MainFirstComponent', () => {
  let component: MainFirstComponent;
  let fixture: ComponentFixture<MainFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
