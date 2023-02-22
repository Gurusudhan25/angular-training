import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewedService } from '../services/viewed.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  public gameDetail: any;
  public gameId: any;
  constructor(
    private _router: ActivatedRoute,
    private _route: Router,
    private _view: ViewedService
  ) {}

  ngOnInit(): void {
    this.gameDetail = this._router.snapshot.paramMap.get('game');
    this.gameId = this._router.snapshot.queryParamMap.get('id');
    this._view.addView(this.gameId)
  }
  back() {
    this._route.navigate(['gamelist']);
  }
}
