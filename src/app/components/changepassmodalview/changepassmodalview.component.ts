import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-changepassmodalview',
  templateUrl: './changepassmodalview.component.html',
  styleUrls: ['./changepassmodalview.component.scss']
})
export class ChangePassModalViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChangePassModalViewComponent>) { }

  ngOnInit() {
  }

  onCloseCancel(){
    this.dialogRef.close('cancel');
  }

  onChangePass(formChangePass){
    console.log(formChangePass);
    if(formChangePass.valid){
      this.dialogRef.close('changePass');
    }
  }
}
