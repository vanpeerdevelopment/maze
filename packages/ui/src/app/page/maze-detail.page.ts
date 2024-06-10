import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MazeDto } from 'maze-dto';
import { AsyncPipe } from '@angular/common';
import { MazeService } from '../maze.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  template: `
    <button routerLink="/overview">⬅️</button>
    @if (maze$ | async; as maze) {
      <div>Maze detail: {{ maze.id }}</div>
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
