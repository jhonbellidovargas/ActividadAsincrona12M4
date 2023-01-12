import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css'],
})
export class FormRegistroComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {}
  registroform = this.formBuilder.group({
    nombre: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    email: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    telefono: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    asunto: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    mensaje: [
      '',
      {
        validators: [Validators.required],
      },
    ],
  });

  get nombre() {
    return this.registroform.get('nombre');
  }
  get email() {
    return this.registroform.get('email');
  }
  get telefono() {
    return this.registroform.get('telefono');
  }
  get asunto() {
    return this.registroform.get('asunto');
  }
  get mensaje() {
    return this.registroform.get('mensaje');
  }

  isCorrect: boolean = false;

  send() {
    if (this.registroform.valid) {
      this.isCorrect = true;
    }
    console.log(this.registroform.value);
  }
}
