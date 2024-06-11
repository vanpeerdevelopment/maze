import { Component, Input } from '@angular/core';
import { MazeDto } from 'maze-dto';
import { DatePipe } from '@angular/common';
import { MazeBooleanPipe } from './maze-boolean.pipe';

@Component({
  selector: 'mz-maze-metadata',
  standalone: true,
  template: ` <ul>
    <li>🪪 id: {{ maze.id }}</li>
    <li>🏁 finished: {{ maze.finished | mzBoolean }}</li>
    <li>🕐 aangemaakt op: {{ maze.createdAt | date: 'dd/MM/yy HH:mm' }}</li>
    <li>⚜️ goud: {{ maze.numberOfGoldFound }} / {{ maze.numberOfGoldBuried }}</li>
    <li>⛏️ graafpogingen over: {{ maze.goldDiggingAttemptsLeft }}</li>
  </ul>`,
  styles: [
    `
      ul {
        margin: 0;
      }
    `,
  ],
  imports: [DatePipe, MazeBooleanPipe],
})
export default class MazeMetadataComponent {
  @Input({ required: true }) maze!: MazeDto;
}
