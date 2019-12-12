import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dreamsList } from 'src/app/shared/dreamsList';
import { Dream } from 'src/app/shared/dream';

@Component({
  selector: 'app-dreams-create',
  templateUrl: './dreams-create.component.html',
  styleUrls: ['./dreams-create.component.css']
})
export class DreamsCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitDream(dream: Dream) {
    dreamsList.push(dream);
    this.router.navigate(['/dreams']);
  }


}
