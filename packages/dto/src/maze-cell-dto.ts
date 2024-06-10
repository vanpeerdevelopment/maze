export interface MazeCellDto {
  row: number;
  column: number;
  goal: boolean;
  current: boolean;
  visited: boolean;
  goldFound: boolean;
  wallLeft: boolean;
  wallRight: boolean;
  wallUp: boolean;
  wallDown: boolean;
}
