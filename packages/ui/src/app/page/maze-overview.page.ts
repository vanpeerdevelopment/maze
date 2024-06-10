import { Component, inject, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { MazeDto } from 'maze-dto';
import { AsyncPipe } from '@angular/common';
import { MazeService } from '../maze.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @for (maze of mazes$ | async; track maze.id) {
      <div>
        <span
          >Maze {{ maze.id }}
          <button (click)="goToDetail(maze.id)">👀</button>
          <button (click)="delete(maze.id)">🗑️</button></span
        >
      </div>
    } @empty {
      <div>No mazes created yet</div>
    }
  `,
  styles: [],
})
export default class MazeOverviewPage implements OnInit {
  private mazeService: MazeService = inject(MazeService);
  private router: Router = inject(Router);
  mazes$: Subject<MazeDto[]> = new ReplaySubject(1);

  ngOnInit(): void {
    this.refreshMazes();
  }

  goToDetail(mazeId: string): void {
    this.router.navigate(['detail', mazeId]);
  }

  delete(mazeId: string): void {
    this.mazeService.deleteMaze(mazeId).subscribe(() => this.refreshMazes());
  }

  private refreshMazes() {
    this.mazeService.getMazes().subscribe((mazes) => this.mazes$.next(mazes));
  }
}
