import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamsCreateComponent } from './dreams-create.component';

describe('DreamsCreateComponent', () => {
  let component: DreamsCreateComponent;
  let fixture: ComponentFixture<DreamsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
