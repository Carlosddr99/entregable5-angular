import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBaseComponentComponent } from './dialog-base-component.component';

describe('DialogBaseComponentComponent', () => {
  let component: DialogBaseComponentComponent;
  let fixture: ComponentFixture<DialogBaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBaseComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
