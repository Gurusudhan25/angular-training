import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss'],
})
export class RoutingComponent implements OnInit {
  name = '';
  p_name: string | null = '';
  id: any;
  constructor(private _router: ActivatedRoute) {}

  showname() {
    console.log(this.name);
    console.log(this.id, this.p_name);
  }
  ngOnInit(): void {
    this._router.queryParams.subscribe((params) => {
      this.name = params['name'];
    });
    this.id = this._router.snapshot.paramMap;
    this.p_name = this._router.snapshot.paramMap.get('name');
  }
}
