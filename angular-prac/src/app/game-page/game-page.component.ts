import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  gameList = [
    { game: 'cricket', type: 'outdoor', id: 1 },
    { game: 'footbal', type: 'outdoor', id: 2 },
    { game: 'chess', type: 'outdoor', id: 3 },
    { game: 'Badmiton', type: 'outdoor', id: 4 },
  ];
  public stateId: any;
  constructor(private _router: Router, private _route: ActivatedRoute) {}
  ngOnInit(): void {
    this.stateId = this._route.snapshot.queryParamMap.get('id');
  }
  navigateTo(val: any) {
    this._router.navigate(['gamedetails', val.game], {
      queryParams: { id: val.id },
    });
  }
}
