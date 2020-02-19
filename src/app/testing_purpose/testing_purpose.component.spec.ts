/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Testing_purposeComponent } from './testing_purpose.component';

describe('Testing_purposeComponent', () => {
  let component: Testing_purposeComponent;
  let fixture: ComponentFixture<Testing_purposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing_purposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing_purposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message `warn`', () => {
    expect(component.content).toContain('warn');
  });
});
