import React, { useEffect, useState } from "react";
import { Row } from "../Row";
import { RowType } from "../Row/Row";
import { initGrid, generateGrid } from "./utils";

import styles from "./styles.module.scss";

export type GridType = RowType[];

export const Grid = () => {
  const gridWidth = 20;
  const gridHeight = 20;

  const [grid, setGrid] = useState(initGrid(gridWidth, gridHeight) as GridType);
  const [answerGrid] = useState(
    generateGrid(gridWidth, gridHeight) as GridType
  );

  const [rowsHints, setRowsHints] = useState([] as number[][]);
  const [columnsHints, setColumnsHints] = useState([] as number[][]);

  useEffect(() => {
    // Rows hints
    const rHints = [] as number[][];
    answerGrid.forEach((row) => {
      const rowHints = [] as number[];

      let value = 0;

      row.forEach((cell) => {
        if (cell === "active") value += 1;
        else {
          if (value) {
            rowHints.push(value);
            value = 0;
          }
        }
      });

      if (value) rowHints.push(value);

      rHints.push(rowHints);
    });
    setRowsHints(rHints);

    // Columns hints
    const cHints = [] as number[][];

    [...Array(answerGrid[0].length).keys()].forEach((columnIndex) => {
      const columnHints = [] as number[];

      let value = 0;

      answerGrid.forEach((row) => {
        if (row[columnIndex] === "active") value += 1;
        else {
          if (value) {
            columnHints.push(value);
            value = 0;
          }
        }
      });

      if (value) columnHints.push(value);

      cHints.push(columnHints);
    });

    setColumnsHints(cHints);
  }, [answerGrid]);

  const onClick = (rowIndex: number, cellIndex: number) => {
    const newGrid = [...grid];
    const current = newGrid[rowIndex][cellIndex];
    if (current === "default") newGrid[rowIndex][cellIndex] = "active";
    else if (current === "active") newGrid[rowIndex][cellIndex] = "inactive";
    else newGrid[rowIndex][cellIndex] = "default";
    setGrid(newGrid);

    if (JSON.stringify(grid) === JSON.stringify(answerGrid))
      window.alert("C'est gagné !!!");
  };

  return (
    <>
      <div className={styles.title}>Logimage</div>

      <div className={styles.grid}>
        <div className={styles.columnsHints}>
          {columnsHints.map((hint) => (
            <div className={styles.columnHints}>
              {hint.map((h) => (
                <div>{h}</div>
              ))}
            </div>
          ))}
        </div>
        {grid.map((row, index) => (
          <Row
            row={row}
            onClick={(evt) => onClick(index, evt)}
            hints={rowsHints[index]}
          />
        ))}
      </div>

      {/* <div className={styles.title}>Solution</div>

      <div className={styles.grid}>
        <div className={styles.columnsHints}>
          {columnsHints.map((hint) => (
            <div className={styles.columnHints}>
              {hint.map((h) => (
                <div>{h}</div>
              ))}
            </div>
          ))}
        </div>
        {answerGrid.map((row, index) => (
          <Row
            row={row}
            onClick={(evt) => onClick(index, evt)}
            hints={rowsHints[index]}
          />
        ))}
      </div> */}
    </>
  );
};
