import { Component, Input } from '@angular/core';
import { MazeDto } from 'maze-dto';
import { NgClass } from '@angular/common';
import { MazeCellPipe } from './maze-cell.pipe';

@Component({
  selector: 'mz-maze',
  standalone: true,
  template: `@for (row of maze.rows; track $index) {
    <div class="row">
      @for (cell of row; track $index) {
        <div
          [class.wallLeft]="cell.wallLeft"
          [class.wallRight]="cell.wallRight"
          [class.wallTop]="cell.wallUp"
          [class.wallBottom]="cell.wallDown"
          class="cell"
        >
          {{ cell | mzMazeCell }}
        </div>
      }
    </div>
  }`,
  styles: [
    `
      .row {
        display: flex;
        flex-direction: row;
      }

      .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        width: 2rem;
        height: 2rem;
      }

      .cell.wall {
        border-width: 2px;
        border-color: black;
      }

      .wallLeft {
        @extend .wall;
        padding-left: 0;
        border-left-style: solid;
      }

      .wallRight {
        @extend .wall;
        padding-right: 0;
        border-right-style: solid;
      }

      .wallTop {
        @extend .wall;
        padding-top: 0;
        border-top-style: solid;
      }

      .wallBottom {
        @extend .wall;
        padding-bottom: 0;
        border-bottom-style: solid;
      }
    `,
  ],
  imports: [NgClass, MazeCellPipe],
})
export default class MazeComponent {
  @Input({ required: true }) maze!: MazeDto;
}
