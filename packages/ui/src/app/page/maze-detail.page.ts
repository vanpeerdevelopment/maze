import { Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MazeDto } from 'maze-dto';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { MazeService } from '../maze.service';
import { RouterLink } from '@angular/router';
import MazeComponent from '../component/maze.component';
import MazeMetadataComponent from '../component/maze-metadata.component';

@Component({
  standalone: true,
  imports: [MazeComponent, AsyncPipe, RouterLink, JsonPipe, DatePipe, MazeMetadataComponent],
  template: `
    <button routerLink="/overview">⬅️</button>
    @if (maze$ | async; as maze) {
      <div class="maze">
        <mz-maze [maze]="maze" />
        <mz-maze-metadata [maze]="maze" />
      </div>
    }
  `,
  styles: [
    `
      .maze {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
      }
    `,
  ],
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
