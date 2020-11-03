export interface ICellOptions {
  size: number;
  padding: number;
  borderColor: number;
  borderWidth: number;
  fillColor: number;
}

export default interface ICell extends ICellOptions {
  x: number;
  y: number;
  isAlive: boolean;
}