import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  public gameDetail: any;
  public gameId: any;
  constructor(private _router: ActivatedRoute, private _route: Router) {}

  ngOnInit(): void {
    this.gameDetail = this._router.snapshot.paramMap.get('game');
    this.gameId = this._router.snapshot.queryParamMap.get('id');
  }
  back() {
    this._route.navigate(['gamelist'], { queryParams: { id: this.gameId } });
  }
}
