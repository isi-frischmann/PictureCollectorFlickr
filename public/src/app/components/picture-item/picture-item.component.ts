import { Component, OnInit, Input } from '@angular/core';
import { HttpService} from '../../http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.css']
})
export class PictureItemComponent implements OnInit {

  @Input() pictures: any = { };
  isClicked: boolean = true;
  itemId: number = null;

  constructor(private httpService: HttpService, private http: HttpClient) {
    const picPath = httpService.path;
    this.pictures = http.get<any>(picPath);
  }

  ngOnInit() {
    this.httpService.getPictures().subscribe(pictures => {
      this.pictures = pictures;
    });
  }

  showInfo(pictureId) {
    this.isClicked = !this.isClicked;
    this.itemId = pictureId;
  }
}
