import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditieComponent } from './editie.component';

describe('EditieComponent', () => {
  let component: EditieComponent;
  let fixture: ComponentFixture<EditieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
