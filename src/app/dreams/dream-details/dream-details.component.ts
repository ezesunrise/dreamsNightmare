import { Component, OnInit } from '@angular/core';
import { Dream } from 'src/app/shared/dream';
import { ActivatedRoute } from '@angular/router';
import { dreamsList } from 'src/app/shared/dreamsList';

@Component({
  selector: 'app-dream-details',
  templateUrl: './dream-details.component.html',
  styleUrls: ['./dream-details.component.css']
})
export class DreamDetailsComponent implements OnInit {

  dream: Dream;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      this.dream = dreamsList.filter(d => d.name === name)[0];
    });
  }

}
