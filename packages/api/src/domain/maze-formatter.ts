import { MazeCell } from './maze-cell';

export class MazeFormatter {
  constructor(private _mazeCells: MazeCell[]) {}

  toString(): string {
    let result: string = '';
    for (let rowIndex = 0; rowIndex < this.numberOfRows(); rowIndex++) {
      result += this.rowToString(rowIndex);
    }
    return result;
  }

  private rowToString(rowIndex: number) {
    const row = this.getRow(rowIndex);
    let result = '';
    if (rowIndex === 0) {
      result += `${this.rowHeaderToString(row)}\n`;
    }
    result += `${this.rowMiddleToString(row)}\n`;
    result += `${this.rowFooterToString(row)}\n`;
    return result;
  }

  private rowHeaderToString(row: MazeCell[]) {
    let result = '';
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (columnIndex === 0) {
        result += '·';
      }
      result += row[columnIndex].hasWall('up') ? '-' : ' ';
      result += '·';
    }
    return result;
  }

  private rowMiddleToString(row: MazeCell[]) {
    let result = '';
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (columnIndex === 0) {
        result += row[columnIndex].hasWall('left') ? '|' : ' ';
      }
      result += this.cellIcon(row[columnIndex]);
      result += row[columnIndex].hasWall('right') ? '|' : ' ';
    }
    return result;
  }

  private cellIcon(cell: MazeCell): string {
    if (cell.isCurrent()) {
      return 'x';
    } else if (cell.isGoal()) {
      return '#';
    } else if (cell.isGoldFound()) {
      return '$';
    } else if (cell.isGoldBuried()) {
      return '!';
    } else if (cell.isVisited()) {
      return 'o';
    }
    return ' ';
  }

  private rowFooterToString(row: MazeCell[]) {
    let result = '';
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (columnIndex === 0) {
        result += '·';
      }
      result += row[columnIndex].hasWall('down') ? '-' : ' ';
      result += '·';
    }
    return result;
  }

  private numberOfRows(): number {
    const rowIndexes = this._mazeCells.map((cell) => cell.getPosition().row);
    return Math.max(...rowIndexes) + 1;
  }

  private getRow(index: number): MazeCell[] {
    return this._mazeCells
      .filter((cell) => cell.getPosition().row === index)
      .sort((cell1, cell2) => cell1.getPosition().column - cell2.getPosition().column);
  }
}
