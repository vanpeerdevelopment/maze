import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MazeDto } from 'maze-dto';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MazeService } from '../maze.service';
import { RouterLink } from '@angular/router';
import MazeComponent from '../component/maze.component';

@Component({
  standalone: true,
  imports: [MazeComponent, AsyncPipe, RouterLink, JsonPipe],
  template: `
    <button routerLink="/overview">⬅️</button>
    @if (maze$ | async; as maze) {
      <div>Maze detail: {{ maze.id }}</div>
      <mz-maze [maze]="maze" />
      <div>{{ maze | json }}</div>
    }
  `,
  styles: [],
})
export default class MazeDetailPage {
  private mazeService: MazeService = inject(MazeService);
  maze$!: Observable<MazeDto>;

  @Input({
    required: true,
  })
  set id(mazeId: string) {
    this.maze$ = this.mazeService.getMaze(mazeId);
  }
}
