import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './view/home/home.component';
import { CurriculumComponent } from './view/curriculum/curriculum.component';
import { ContatoComponent } from './view/contato/contato.component';
import { ProjetosComponent } from './view/projetos/projetos.component';

const routes: Routes = [
    { path:'', component: HomeComponent  },
    { path:'curriculum', component: CurriculumComponent },
    { path:'projetos', component: ProjetosComponent },
    { path:'contato', component: ContatoComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);