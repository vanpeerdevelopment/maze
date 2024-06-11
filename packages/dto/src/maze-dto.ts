import { MazeCellDto } from './maze-cell-dto';

export interface MazeDto {
  id: string;
  numberOfGoldBuried: number;
  numberOfGoldFound: number;
  goldDiggingAttemptsLeft: number;
  standingOnGold: boolean;
  finished: boolean;
  createdAt: Date;
  rows: MazeCellDto[][];
}
