// describe('Testing tests', () => {
//   it('should succeed', () => expect(true).toEqual(true));
//   it('should fail', () => expect(true).toEqual(false));
// });

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AppModule } from '../app.module';

describe('StaticComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [CommonModule, ReactiveFormsModule, AppModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;

    component.form = formBuilder.group({
      firstName: '',
      lastName: '',
      phone: '',
      country: ''
    });
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should check First Name Validation', () => {
    component.form.patchValue({
      firstName: '',
      lastName: 'lastname',
      phone: '9542365897',
      country: 'India'
    });
    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['firstName'].errors.required).toBeTruthy();

    component.form.patchValue({
      firstName: 'test',
      lastName: 'lastname',
      phone: '9542365897',
      country: 'India'
    });
    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['firstName'].errors.minlength).toBeTruthy();
  });
});
