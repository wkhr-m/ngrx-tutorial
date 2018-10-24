import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as TutorialActions from '../actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }));
  }

}
