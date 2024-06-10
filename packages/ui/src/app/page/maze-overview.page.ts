import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MazeDto } from 'maze-dto';
import { AsyncPipe } from '@angular/common';
import { MazeService } from '../maze.service';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @for (maze of mazes$ | async; track maze.id) {
      <div>Maze {{ maze.id }}</div>
    }
  `,
  styles: [],
})
export default class MazeOverviewPage implements OnInit {
  private mazeService: MazeService = inject(MazeService);
  mazes$!: Observable<MazeDto[]>;

  ngOnInit(): void {
    this.mazes$ = this.mazeService.getMazes();
  }
}
