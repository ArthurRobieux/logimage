import { CellType } from "../Cell/Cell";
import { RowType } from "../Row/Row";
import { GridType } from "./Grid";

export const initGrid = (width: number, height: number) => {

    const grid = [] as GridType;
    [...Array(height).keys()].forEach(() => {
        const row = [] as RowType;
        [...Array(width).keys()].forEach(() => row.push("default"));
        grid.push(row)}
    );

    return grid;
};

const randomValue = () => {
    const choices = ['active', 'active', 'active', 'active', 'inactive'] as CellType[];
    const value = choices[Math.floor(Math.random() * choices.length)];
    return value;
}

export const generateGrid = (width: number, height: number) => {
    
    const grid = [] as GridType;
    [...Array(height).keys()].forEach(() => {
        const row = [] as RowType;
        [...Array(width).keys()].forEach(() => row.push(randomValue()));
        grid.push(row)}
    );

    return grid;
};
  