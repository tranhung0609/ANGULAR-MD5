import {Component, OnInit} from '@angular/core';
import {SongService} from "../service/song.service";
import {Song} from "../model/song";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlist: Song[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    // @ts-ignore
    this.playlist = this.songService.playlist;
  }

}
