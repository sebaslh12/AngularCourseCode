import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { DirectivesModule } from "../shared/directives/directives.module";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { AuthInterceptor } from "../shared/auth.interceptor";
import { LoggingInterceptor } from "../shared/logging.interceptor";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        DirectivesModule,
        AppRoutingModule,
        CommonModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
    ]
})
export class CoreModule { }