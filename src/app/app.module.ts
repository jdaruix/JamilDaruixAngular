import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HomeComponent } from './view/home/home.component';
import { CurriculumComponent } from './view/curriculum/curriculum.component';
import { ContatoComponent } from './view/contato/contato.component';
import { ProjetosComponent } from './view/projetos/projetos.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurriculumComponent,
    ContatoComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  exports: [
  ]
})
export class AppModule { }