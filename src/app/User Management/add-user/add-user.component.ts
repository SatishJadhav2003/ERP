import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../core/services/common.service';
import { UserService } from '../../core/services/user.service';
import { Module } from '../../shared/model/module.model';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  userService = inject(UserService);
  commonService = inject(CommonService);

  // Variables
  moduleList: Module[] = [];
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation
    this.userForm = this.fb.group({
      User_ID: [{ value: '', disabled: true }, Validators.required],
      User_Name: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Phone_Number: [
        '',
        [Validators.required],
      ], // Phone pattern 12345 67890
      Module: ['', Validators.required],
      Location: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.commonService.getModuleList().subscribe((data) => {
      console.log(data);
      this.moduleList = data;
    });
  }

  // On form submission
  onSubmit(): void {
    if (this.userForm.valid) {
      const formData = this.userForm.getRawValue(); // Get the form values including disabled fields
      console.log('Form Submitted', formData);
      // Call your API here
      this.userService.addUser(this.userForm.value).subscribe((data)=>{
        console.log(data)
        if(data)
        {
          this.userForm.reset();
        }
      })
    } else {
      console.error('Form is invalid');
      this.userForm.markAllAsTouched(); // Show validation errors if form is invalid
    }
  }

  // Utility to get form controls for error checking
  get f() {
    return this.userForm.controls;
  }
}
