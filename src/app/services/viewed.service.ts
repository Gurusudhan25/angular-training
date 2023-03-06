import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewedService implements OnInit {
  public viewedList: string[] = [];
  constructor() {}
  ngOnInit(): void {}

  addView(id: string) {
    if (this.viewedList.length === 0) {
      this.viewedList.push(id);
    } else {
      let state = false;
      for (const val of this.viewedList) {
        if (val === id) {
          state = true;
        }
      }
      if (state === false) {
        this.viewedList.push(id);
      }
    }
  }
  getView() {
    return this.viewedList;
  }
}
