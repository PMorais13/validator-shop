import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  cadastro: FormGroup;
  link = '';

  constructor(private fb: FormBuilder) { }

  get f(){
    return this.cadastro.controls;
  }

  ngOnInit() {

    this.cadastro = this.fb.group({
      empresa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      email: ['', [Validators.required, Validators.minLength(13), Validators.email]],
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      endereco: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      cidade: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      estado: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      
    })
  }

  salvar() {
    if (this.cadastro.invalid){
      return
    } else{
      return this.link = '/credit-card';
    }


  }

  reset(): void {
    this.cadastro.reset();
  }

}
