import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUseComponent } from './form-use.component';

describe('FormUseComponent', () => {
  let component: FormUseComponent;
  let fixture: ComponentFixture<FormUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
