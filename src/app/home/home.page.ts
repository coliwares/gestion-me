import { Component, OnInit } from '@angular/core';
import { LevelService } from '../services/level.service';
import { Level } from '../models/level.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  selectedLevel: string;
  levels: Level[] = [];

  constructor(private levelService: LevelService) {
    this.selectedLevel = '';
  }

  ngOnInit() {
    this.levelService.getLevels().subscribe((data: Level[]) => {
      this.levels = data;
    });
  }
}
