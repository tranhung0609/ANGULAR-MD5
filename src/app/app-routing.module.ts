import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelinesComponent} from "./timelines/timelines.component";
import {PlaylistComponent} from "./youtube-player/playlist.component";
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";

const routes: Routes = [
  // {
  //   path: 'timelines',
  //   component: TimelinesComponent
  // },
  {
    path: 'youtube',
    component: PlaylistComponent,
    children:[{
      path: ':id',
      component:YoutubePlaylistComponent
    }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
