import { Component, OnInit } from '@angular/core';
import {SongService} from "../service/song.service";
import {Song} from "../model/song";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-youtube-youtube-player',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {
  song: any;
  constructor(
    private songService: SongService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.song = this.songService.findSongById(id);
    });
  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
