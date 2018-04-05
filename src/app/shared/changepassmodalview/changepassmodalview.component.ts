import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from './matchpassword.validate';


@Component({
  selector: 'app-changepassmodalview',
  templateUrl: './changepassmodalview.component.html',
  styleUrls: ['./changepassmodalview.component.scss']
})
export class ChangePassModalViewComponent implements OnInit {
  
  
  changePasswordForm :FormGroup;
  

  constructor(
    public dialogRef: MatDialogRef<ChangePassModalViewComponent>,
    private changePassFrm: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.changePasswordForm = this.changePassFrm.group({
      currentPassword:['', [Validators.required]],
      newPassword:['', [Validators.required]],
      confirmPassword:['', [Validators.required]]
    },{
      validator: PasswordValidation.matchPassword // your validation method
    })
    }

  getErrorMessage(formControl){
    return formControl.hasError('required') ? 'This value is required' : 
    formControl.hasError('matchPassword')?'Confirm password does not match new password':"";
    // this.newPassword.hasError('required')?'New password is required':
    // this.'';
  }

  onCloseCancel(){
    this.dialogRef.close();
  }

  onChangePass(){
    if(this.changePasswordForm.valid){
      this.dialogRef.close(this.changePasswordForm.value);
    }
  }
}

