import React from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

export type CellType = "default" | "active" | "inactive";

export type CellProps = {
  cell: CellType;
  onClick: () => void;
};

export const Cell = ({ cell, onClick }: CellProps) => {
  return (
    <div
      className={classnames(styles.cell, {
        [styles.active]: cell === "active",
        [styles.inactive]: cell === "inactive",
      })}
      onClick={onClick}
    />
  );
};
