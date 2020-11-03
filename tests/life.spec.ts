import jest from 'jest';
import Cell from '../src/lib/cell.model';
import Life from '../src/lib/life.model';

describe('LIFE GENERATE', () => {
  test('Generates the correct number of rows', () => {
    const life: Life = new Life();
    expect(life.cells.length).toBe(20);
  });

  test('Generates the correct number of columns', () => {
    const life: Life = new Life();
    expect(life.cells[0].length).toBe(20);
  });

  test('Generates random life', () => {
    const life: Life = new Life();
    const randRowIndex: number = ~~(Math.random() * life.cells.length);
    const row: Cell[] = life.cells[randRowIndex];
    const living: number = row.filter((cell: Cell) => cell.isAlive).length;


    console.log(randRowIndex);
    console.log(living);

    expect((living > 0 && living < row.length)).toBe(true);
  });

  test('Generates correct cell count', () => {
    const life: Life = new Life();

    const flattened: number = life.cells.reduce(((a, b) => a.concat(b))).length;

    expect(flattened).toBe(400);
  });
  
});