import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfswitchComponent } from './ifswitch.component';

describe('IfswitchComponent', () => {
  let component: IfswitchComponent;
  let fixture: ComponentFixture<IfswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
