import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrFormComponent } from './ir-form.component';

describe('IrFormComponent', () => {
  let component: IrFormComponent;
  let fixture: ComponentFixture<IrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
