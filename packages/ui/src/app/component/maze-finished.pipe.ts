import { Pipe, PipeTransform } from '@angular/core';
import { MazeDto } from 'maze-dto';

@Pipe({
  name: 'mzMazeFinished',
  standalone: true,
})
export class MazeFinishedPipe implements PipeTransform {
  transform(maze: MazeDto): string {
    return maze.finished ? '✅' : '⚙';
  }
}
