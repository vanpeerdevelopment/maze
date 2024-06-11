import { Pipe, PipeTransform } from '@angular/core';
import { MazeCellDto, MazeDto } from 'maze-dto';

@Pipe({
  name: 'mzMazeCell',
  standalone: true,
})
export class MazeCellPipe implements PipeTransform {
  transform(cell: MazeCellDto): string {
    if (cell.current) {
      return '🐧';
    } else if (cell.goal) {
      return '🏁';
    } else if (cell.goldFound) {
      return '⚜️';
    } else if (cell.visited) {
      return '';
    } else {
      return '·';
    }
  }
}
