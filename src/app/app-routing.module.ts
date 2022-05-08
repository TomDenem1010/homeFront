import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './page/video/video.component';
import { MagicComponent } from './page/magic/magic.component';

const routes: Routes = [
  { path: 'video', component: VideoComponent },
  { path: 'magic', component: MagicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
