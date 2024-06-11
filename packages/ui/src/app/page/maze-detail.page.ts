import { Component, DestroyRef, inject, Input } from '@angular/core';
import { Observable, ReplaySubject, Subscription, switchMap, timer } from 'rxjs';
import { MazeDto } from 'maze-dto';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { MazeService } from '../maze.service';
import { RouterLink } from '@angular/router';
import MazeComponent from '../component/maze.component';
import MazeMetadataComponent from '../component/maze-metadata.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [MazeComponent, AsyncPipe, JsonPipe, DatePipe, MazeMetadataComponent],
  template: `
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
  private destroyRef: DestroyRef = inject(DestroyRef);
  maze$: ReplaySubject<MazeDto> = new ReplaySubject(1);

  @Input({
    required: true,
  })
  set id(mazeId: string) {
    timer(0, 500)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .pipe(switchMap((_) => this.mazeService.getMaze(mazeId)))
      .subscribe((maze) => this.maze$.next(maze));
  }
}
