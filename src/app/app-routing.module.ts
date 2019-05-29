import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'crear-alumno', loadChildren: './crear-alumno/crear-alumno.module#CrearAlumnoPageModule' },
  { path: 'modal-search-alumnos', loadChildren: './modal-search-alumnos/modal-search-alumnos.module#ModalSearchAlumnosPageModule' },
  { path: 'ver-alumnos', loadChildren: './ver-alumnos/ver-alumnos.module#VerAlumnosPageModule' },
  { path: 'ver-datos-alumno', loadChildren: './ver-datos-alumno/ver-datos-alumno.module#VerDatosAlumnoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
