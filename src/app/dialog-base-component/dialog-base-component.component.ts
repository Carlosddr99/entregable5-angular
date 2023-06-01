import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-base-component',
  templateUrl: './dialog-base-component.component.html',
  styleUrls: ['./dialog-base-component.component.scss']
})


export class DialogBaseComponentComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  ciudadFormControl = new FormControl('', [Validators.required]);
  numeroFormControl = new FormControl('', [Validators.required]);
  calleFormControl = new FormControl('', [Validators.required]);
  codigoPostalFormControl = new FormControl('', [Validators.required]);

  nombre = "";
  
  constructor(public dialogRef: MatDialogRef<DialogBaseComponentComponent>) {}

  enviarFormulario(){
    let dataForm = {
      nombre : this.nombre,
      email : this.emailFormControl.value,
      numero : this.numeroFormControl.value,
      ciudad : this.ciudadFormControl.value,
      calle : this.calleFormControl.value,
      codigo : this.codigoPostalFormControl.value,
    }

    this.dialogRef.close(dataForm);

  }
}
