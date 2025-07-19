import { Routes } from '@angular/router';
import { Notes } from '../notes/notes';
import { About } from '../about/about';
import { Note } from '../note/note';
import { PageNotFound } from '../page-not-found/page-not-found';
import { AboutProjects } from '../about-projects/about-projects';
import { AboutSponsors } from '../about-sponsors/about-sponsors';
import { AboutLocations } from '../about-locations/about-locations';

export const routes: Routes = [
    {path:'', title:'Home', redirectTo:'/notes', pathMatch:'full' },
    {path:'notes', title:'Notes', component:Notes },
    {path:'note/:id', title:'About-Us', component:Note },
    {path:'about', title:'About-Us', component:About , children:[
        {path:'projects', title:'Projects', component:AboutProjects },
        {path:'sponsors', title:'Sponsors', component:AboutSponsors },
        {path:'locations', title:'Officies', component:AboutLocations },
    ]},
    {path:'**', title:'Page-Not-Found', component:PageNotFound },
    

];
