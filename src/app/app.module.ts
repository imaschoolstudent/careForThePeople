import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchComponent } from './search/search.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { FilterComponent } from './filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material'
import { MatInputModule } from '@angular/material'
import { MatRippleModule } from '@angular/material'

import { MatToolbarModule } from '@angular/material'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'

import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignUpComponent,
    SearchComponent,
    RecommendationComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent},
      { path: 'search', component: SearchComponent},
      { path: 'signup', component: SignUpComponent},
      { path: 'filter', component: FilterComponent},
      { path: 'recommendation', component: RecommendationComponent},
    ]),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
