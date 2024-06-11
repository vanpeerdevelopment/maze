import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MazeDto } from 'maze-dto';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { MazeService } from '../maze.service';
import { RouterLink } from '@angular/router';
import MazeComponent from '../component/maze.component';
import MazeMetadataComponent from '../component/maze-metadata.component.ts';

@Component({
  standalone: true,
  imports: [MazeComponent, AsyncPipe, RouterLink, JsonPipe, DatePipe, MazeMetadataComponent],
  template: `
    <button routerLink="/overview">⬅️</button>
    @if (maze$ | async; as maze) {
      <h1>Maze</h1>
      <mz-maze-metadata [maze]="maze" />
      <mz-maze [maze]="maze" />
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
