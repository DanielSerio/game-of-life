import { ICellOptions } from './cell.interface';
import Cell from './cell.model';

export default interface ILife {
  cellOptions: ICellOptions;
  cellCount: number;
  cells: Cell[][];

  generateRandomCells: () => void;
}