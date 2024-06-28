import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClickYesComponent } from './click-yes/click-yes.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "calculator",
        component: CalculatorComponent
    },
    {
        path: "click-yes",
        component: ClickYesComponent
    }
];
