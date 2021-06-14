import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./features/components/cadastro/cadastro.component";
import { CreditCardComponent } from "./features/components/credit-card/credit-card.component";
import { HomeComponent } from "./features/components/home/home.component";


const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'cadastro',
        component: CadastroComponent,
    },
    {
        path: 'credit-card',
        component: CreditCardComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}