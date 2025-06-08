"use client";

import {
  createContext,
  useState,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

interface RowData {
  amount: number;
  tariff: number;
}

interface TableContextType {
  rows: Map<number, RowData>;
  updateRow: (index: number, amount: number, tariff: number) => void;
  total: number;
}

export const TableContext = createContext<TableContextType>({
  rows: new Map(),
  updateRow: () => {},
  total: 0,
});

export const TableProvider = ({ children }: { children: ReactNode }) => {
  const [rows, setRows] = useState<Map<number, RowData>>(new Map());

  const updateRow = useCallback(
    (index: number, amount: number, tariff: number) => {
      setRows((prev) => {
        const updated = new Map(prev);
        updated.set(index, { amount, tariff });
        return updated;
      });
    },
    []
  );

  const total = useMemo(() => {
    let sum = 0;
    rows.forEach(({ amount, tariff }) => {
      sum += amount * tariff;
    });
    return sum;
  }, [rows]);

  return (
    <TableContext.Provider value={{ rows, updateRow, total }}>
      {children}
    </TableContext.Provider>
  );
};
