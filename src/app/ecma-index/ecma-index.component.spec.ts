import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcmaIndexComponent } from './ecma-index.component';

describe('EcmaIndexComponent', () => {
  let component: EcmaIndexComponent;
  let fixture: ComponentFixture<EcmaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcmaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcmaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
