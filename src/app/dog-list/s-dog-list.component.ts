import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogDetailsService } from '../services/dog-details.service';

@Component({
  selector: 'app-s-dog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './s-dog-list.component.html',
  styleUrls: ['./s-dog-list.component.scss']
})
export class SDogListComponent {
  dogview: any = [];
  constructor(private _dogList: DogDetailsService) {}

  ngOnInit(): void {
    this._dogList.getDogs().subscribe((res) => {
      this.dogview = res;
    });
  }
}
