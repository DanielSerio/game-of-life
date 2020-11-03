import ICell from "./cell.interface";

export default class Cell implements ICell {
  constructor(
    public x: number,
    public y: number,
    public isAlive: boolean = false,
    public size: number = 32,
    public padding: number = 1,
    public fillColor: number = 0x333333,
    public borderColor: number = 0x555555,
    public borderWidth: number = 1
  ) {}
}