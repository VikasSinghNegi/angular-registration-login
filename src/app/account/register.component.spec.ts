import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AppModule } from '../app.module';

describe('Register Component', () => {
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

    component.form.patchValue({
      firstName: 'testing',
      lastName: 'lastname',
      phone: '9542365897',
      country: 'India'
    });
    expect(component.form.invalid).toBeFalsy();
  });

  it('should check Last Name Validation', () => {
    component.form.patchValue({
      firstName: 'firstName',
      lastName: '',
      phone: '9542365897',
      country: 'India'
    });
    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['lastName'].errors.required).toBeTruthy();

    component.form.patchValue({
      firstName: 'firstName',
      lastName: 'last',
      phone: '9542365897',
      country: 'India'
    });
    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['lastName'].errors.minlength).toBeTruthy();

    component.form.patchValue({
      firstName: 'firstName',
      lastName: 'lastname',
      phone: '9542365897',
      country: 'India'
    });
    expect(component.form.invalid).toBeFalsy();
  });

  it('should check Phone Validation', () => {
    component.form.patchValue({
      firstName: 'firstname',
      lastName: 'lastname',
      phone: '',
      country: 'India'
    });
    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['phone'].errors.required).toBeTruthy();

    component.form.patchValue({
      firstName: 'firstname',
      lastName: 'lastname',
      phone: '95423',
      country: 'India'
    });
    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['phone'].errors.minlength).toBeTruthy();

    component.form.patchValue({
      firstName: 'firstname',
      lastName: 'lastname',
      phone: '95423658568',
      country: 'India'
    });
    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['phone'].errors.maxlength).toBeTruthy();
  });

  it('should check Country Validation', () => {
    component.form.patchValue({
      firstName: 'firstName',
      lastName: 'lastname',
      phone: '9542365897',
      country: ''
    });
    expect(component.form.invalid).toBeTruthy();
    expect(component.form.controls['country'].errors.required).toBeTruthy();

    component.form.patchValue({
      firstName: 'firstName',
      lastName: 'lastname',
      phone: '9542365897',
      country: 'India'
    });
    expect(component.form.invalid).toBeFalsy();
  });

  it('should call onSubmit', () => {
    component.form.patchValue({
      firstName: 'firstName',
      lastName: 'lastname',
      phone: '9542365897',
      country: 'India'
    });
    component.onSubmit();
    fixture.detectChanges();
    expect(component.form.invalid).toBeFalsy();
  });
});
