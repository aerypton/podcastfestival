import {Component} from '@angular/core';

@Component({
  selector: 'app-editie',
  templateUrl: './editie.component.html',
  styleUrls: ['./editie.component.scss']
})
export class EditieComponent {

  public youtubeUrl = 'mCJETrw5Wi0';

  constructor() {
  }


  setYoutubeUrl(url) {

    this.youtubeUrl = url;
  }

}
