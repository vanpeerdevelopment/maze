import { Component, Input } from '@angular/core';
import { MazeDto } from 'maze-dto';

@Component({
  selector: 'mz-maze',
  standalone: true,
  template: `@for (row of maze.rows; track $index) {
    @for (cell of row; track $index) {
      <div>Cell ({{ cell.row }}, {{ cell.column }})</div>
    }
  }`,
  styles: [],
})
export default class MazeComponent {
  @Input({ required: true }) maze!: MazeDto;
}
