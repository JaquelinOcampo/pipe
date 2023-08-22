import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAngularComponent } from './pipe-angular.component';

describe('PipeAngularComponent', () => {
  let component: PipeAngularComponent;
  let fixture: ComponentFixture<PipeAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
