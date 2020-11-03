import { ICellOptions } from './cell.interface';
import Cell from './cell.model';
import ILife from "./life.interface";

export default class Life implements ILife {
  public cellOptions: ICellOptions = {
    size: 32,
    padding: 1,
    borderWidth: 1,
    borderColor: 0x555555,
    fillColor: 0x333333
  };
  public cellCount: number = 400;
  public cells: Cell[][] = [];

  constructor() {
    this.generateRandomCells();
  }

  public generateRandomCells(): void {
    let row: Cell[] = [];
    const sqrt: number = ~~Math.sqrt(this.cellCount);

    for (let i = 0; i < this.cellCount; i++) {
      const y: number = Math.round(i / 20);
      const x: number = i % sqrt;
      if (i % sqrt === 0 && i >= sqrt) {
        this.cells.push(row);
        row = [];
      }

      if (i === this.cellCount - 1) this.cells.push(row);

      row.push(new Cell(x, y, !!Math.round(Math.random())));
    }
  }

  private getLiveNeighborCount(cell: Cell): number {
    let xMin: number = cell.x - 1;
    let xMax: number = cell.x + 1;
    let yMin: number = cell.y - 1;
    let yMax: number = cell.y + 1;
    let len: number = this.cells[0].length;
    let count: number = 0;

    if (xMin < 0) xMin = 0;
    if (xMax >= len) xMax = len - 1;
    if (yMin < 0) yMin = 0;
    if (yMax >= len) yMax = len - 1;

    for (let y = yMin; y < yMax; y++) {
      for (let x = xMin; x < xMax; x++) {
        if (y !== cell.y && x !== cell.x) {
          if(this.cells[y][x].isAlive) count++;
        } 
      }
    }

    return count;
  }
}