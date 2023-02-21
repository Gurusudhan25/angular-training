import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ViewedService } from '../viewed.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  gameList = [
    { game: 'cricket', type: 'outdoor', id: '1' },
    { game: 'footbal', type: 'outdoor', id: '2' },
    { game: 'chess', type: 'outdoor', id: '3' },
    { game: 'Badmiton', type: 'outdoor', id: '4' },
  ];
  
  public stateId: string | null = '';
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _view: ViewedService
  ) {}
  ngOnInit(): void {
    this._route.paramMap.subscribe((res: ParamMap) => {
      this.stateId = res.get('id');
    });
  }
  navigateTo(val: any) {
    this._router.navigate(['gamedetails', val.game], {
      queryParams: { id: val.id },
    });
  }

  isViewed(id: string): Boolean {
    let viewedState: Boolean = false;
    const viewdList = this._view.getView();
    for (let val of viewdList) {
      if (val === id) {
        viewedState = true;
      }
    }
    return viewedState
  }
}
