import { Component, OnInit } from '@angular/core';
import { Dream } from '../shared/dream';
import { dreamsList } from '../shared/dreamsList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {

  dreams: Dream[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.dreams = dreamsList;
  }

  search(tag: string){

    this.dreams = tag ? dreamsList.filter(d => d.tag === tag) : dreamsList;
  }

  view(name: string) {
   this.router.navigate(['dreams',name,'details'])
  }

}

