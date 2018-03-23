import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  @Input() url: string;

  constructor(public sanitizer: DomSanitizer) {
  }

  public getUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.url + '?autoplay=1');
  }

}

