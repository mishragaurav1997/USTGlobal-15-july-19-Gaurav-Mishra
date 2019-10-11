import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { HeaderComponent } from './header/header.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            CarsComponent,
            CarDetailsComponent,
            RecipesComponent,
            RecipeDetailsComponent,
            NewsComponent,
            NewsDetailsComponent,
            MobileComponent,
            MobileDetailsComponent,
            HeaderComponent,
        ],
        imports: [
            BrowserModule,
            RouterModule.forRoot([
                { path: 'cars', component: CarsComponent },
                { path: 'recipes', component: RecipesComponent },
                { path: 'news', component: NewsComponent },
                { path: 'mobile', component: MobileComponent }
            ])
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map