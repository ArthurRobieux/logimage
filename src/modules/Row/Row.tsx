import React from "react";
import { Cell } from "../Cell";
import { CellType } from "../Cell/Cell";

import styles from "./styles.module.scss";

export type RowType = CellType[];

export type RowProps = {
  row: RowType;
  onClick: (rowIndex: number) => void;
  hints: number[];
};

export const Row = ({ row, onClick, hints }: RowProps) => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.hints}>{hints}</div>
      <div className={styles.row}>
        {row.map((cell, index) => (
          <Cell cell={cell} onClick={() => onClick(index)} />
        ))}
      </div>
    </div>
  );
};
