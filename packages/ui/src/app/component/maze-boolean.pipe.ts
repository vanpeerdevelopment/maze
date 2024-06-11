import { Pipe, PipeTransform } from '@angular/core';
import { MazeDto } from 'maze-dto';

@Pipe({
  name: 'mzBoolean',
  standalone: true,
})
export class MazeBooleanPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'ja' : 'nee';
  }
}
