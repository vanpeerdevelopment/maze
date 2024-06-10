export interface MazeDto {
  id: string;
  standingOnGold: boolean;
  numberOfGoldBuried: number;
  numberOfGoldFound: number;
  goldDiggingAttemptsLeft: number;
  finished: boolean;
}
