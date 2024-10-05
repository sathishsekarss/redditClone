import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { loginResolverResolver } from '../resolvers/loginResolver/login-resolver.resolver';

export const routes: Routes = [
    //Setting default routing path for the angular application when the page loads for the first time
    {
        path:'',
        redirectTo:'/Login',
        pathMatch:'full'
    },
    {
        path:"Login",
        component:LoginPageComponent,
        resolve:{sample:loginResolverResolver}
    }
];
