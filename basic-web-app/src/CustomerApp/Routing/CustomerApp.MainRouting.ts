import { HomeComponent } from '../Home/HomeApp.component';
import { AppComponent } from '../Customer/CustomerApp.component';
import { MinimalistComponent } from '../Minimalist/Minimalist.component';


export const MainRoutes = [
{ path: '', component: HomeComponent},
{ path: 'Customer', component: AppComponent},
{ path: 'Minimalist', component: MinimalistComponent}
]