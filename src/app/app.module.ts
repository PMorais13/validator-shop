import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './shared/material-module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CadastroComponent } from './features/components/cadastro/cadastro.component';
import { CreditCardComponent } from './features/components/credit-card/credit-card.component';
import { HomeComponent } from './features/components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroComponent,
    CreditCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
