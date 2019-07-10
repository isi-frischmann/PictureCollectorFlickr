import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})

export class PicturesComponent implements OnInit {
  constructor(private httpService: HttpService) { }

  ngOnInit() { }
}
