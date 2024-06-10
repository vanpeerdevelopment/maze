import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MazeService } from './maze.service';
import { Observable } from 'rxjs';
import { MazeDto } from 'maze-dto';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'mz-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  template: `
    <h1>Welcome to maze!</h1>
    @for (maze of mazes$ | async; track maze.id) {
      <div>Maze {{ maze.id }}</div>
    }
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  private mazeService: MazeService = inject(MazeService);
  mazes$!: Observable<MazeDto[]>;

  ngOnInit(): void {
    this.mazes$ = this.mazeService.getMazes();
  }
}
