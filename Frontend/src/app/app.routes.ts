import { Routes } from '@angular/router';
import { ListHabitsComponent } from './components/list-habits/list-habits.component';
import { NewHabitComponent } from './components/new-habit/new-habit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditHabitComponent } from './components/edit-habit/edit-habit.component';

export const routes: Routes =
 [
    {path: '', component: LoginComponent},
    {path: 'add', component: NewHabitComponent},
    {path: "edit/:id", component: EditHabitComponent},
    {path: 'list-habits', component: ListHabitsComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
 ];
