import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

    public cadastro: FormGroup;

    constructor(
        private fb: FormBuilder,
        private readonly router: Router,
    ) {}

    public get f() {
        return this.cadastro.controls;
    }

    public ngOnInit(): void {

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

    /** Rotaciona para credit-card caso formulário seja válido. */
    public salvar(): void {

        if (this.cadastro.valid) {
            this.router.navigate(['/credit-card']);
        }
    }

    public reset(): void {
        this.cadastro.reset();
    }

}
