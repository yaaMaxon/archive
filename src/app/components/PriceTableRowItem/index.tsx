"use client";

import { useState, ChangeEvent, useContext } from "react";
import { TableContext } from "@/app/context";

type Props = {
  number: number;
  typeOfWork: string;
  unit: string;
  tariff: number;
};

const PriceTableRowItem = ({ number, typeOfWork, unit, tariff }: Props) => {
  const [amount, setAmount] = useState(0);
  const { updateRow } = useContext(TableContext);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 99999) {
      setAmount(value);
      updateRow(number, value, tariff); // ⬅️ Оновлюємо контекст
    }
  };

  return (
    <tr className="hover:bg-[#F4F8F8] transition-colors duration-150">
      <td className="border border-[#E1E4E5] text-[#1F2D3D] text-sm md:text-base p-2 md:p-3 hidden md:table-cell">
        {number}
      </td>
      <td className="border border-[#E1E4E5] text-[#1F2D3D] text-sm md:text-base p-2 md:p-3 max-w-40">
        <span className="inline md:hidden">
          {typeOfWork} ({unit})
        </span>
        <span className="hidden md:inline">{typeOfWork}</span>
      </td>
      <td className="border border-[#E1E4E5] text-[#1F2D3D] text-sm md:text-base p-2 md:p-3 hidden md:table-cell">
        {unit}
      </td>
      <td className="border border-[#E1E4E5] text-[#1F2D3D] text-sm md:text-base p-2 md:p-3">
        {tariff}
      </td>
      <td className="border border-[#E1E4E5] text-[#1F2D3D] text-sm md:text-base p-2 md:p-3">
        <input
          className="w-full max-w-[4rem] border border-[#D6DADB] rounded-md px-2 py-1 text-sm text-[#1F2D3D] focus:outline-none focus:ring-2 focus:ring-[#9FAEC0]/30"
          maxLength={5}
          type="number"
          placeholder="0"
          // value={amount}
          min={0}
          max={99999}
          onInput={handleInput}
        />
      </td>
      <td className="border border-[#E1E4E5] text-[#1F2D3D] text-sm md:text-base p-2 md:p-3">
        {tariff * amount}
      </td>
    </tr>
  );
};

export default PriceTableRowItem;
