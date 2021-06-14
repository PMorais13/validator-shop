import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  cartao: FormGroup;
  link: string = '';

  constructor(private fb: FormBuilder) { }

  get f(){
    return this.cartao.controls;
  }

  ngOnInit() {

    this.cartao = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      numero: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      seguranca : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      data : ['', [Validators.required]],
      bandeira : ['', [Validators.required]],
      cpf : ['', [Validators.required]],
      
    })

  }

  salvar() {
    if (this.cartao.invalid){
      return
    } else{
      return this.link = '/';
    }


  }

  reset(): void {
    this.cartao.reset();
  }

}
