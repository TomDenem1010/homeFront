import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './page/video/video.component';
import { MagicComponent } from './page/magic/magic.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'video', component: VideoComponent, canActivate:[AuthGuardService] },
  { path: 'magic', component: MagicComponent, canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
