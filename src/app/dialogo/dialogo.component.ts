import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogBaseComponentComponent} from '../dialog-base-component/dialog-base-component.component'
@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.scss']
})
export class DialogoComponent {
  dataForm = {
    nombre : "",
    email : "",
    numero : "",
    ciudad : "",
    calle : "",
    codigo : "",  
  }
  constructor(public dialog: MatDialog) {}

  openDialog(){
    const dialogRef = this.dialog.open(DialogBaseComponentComponent);

    dialogRef.afterClosed().subscribe(dataForm =>{
      this.dataForm = dataForm;
    })

  }
}
