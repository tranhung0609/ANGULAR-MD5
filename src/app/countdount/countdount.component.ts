import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdount',
  templateUrl: './countdount.component.html',
  styleUrls: ['./countdount.component.css']
})
export class CountdountComponent implements OnInit {
  // @ts-ignore
  @Input() start: any

  constructor() {
  }

  temp: any
  interval: any

  ngOnInit(): void {
    this.temp = this.start
  }

  load() {

    this.interval = setInterval(() => {
      this.start = +this.start - 1;
      if (this.start == 0) {
        clearInterval(this.interval)

      }
    }, 500)
  }


  stop() {
    clearInterval(this.interval)
  }

  reset() {
    clearInterval(this.interval)
    this.start = this.temp
  }
}
