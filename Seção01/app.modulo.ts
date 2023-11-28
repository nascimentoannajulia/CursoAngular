import { browserModulo } from '@angular/platform-browser';
import { NgModulo } from '@angular/core';
import { FormsModulo } from '@angular/forms';
import { HttpModule } from '@ngular/http';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

@NgModule({
    declarations: [
        AppComponent,
        MeuPrimeiroComponent
    ],
    imports: [
       BrowserModule,
       FormsModule,
       HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})