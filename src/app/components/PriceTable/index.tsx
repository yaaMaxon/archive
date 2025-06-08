"use client";

import { useIsDesktop } from "../hooks/useIsDesktop";
import { priceTableItems } from "@/app/constants/priceTableSettings";
import PriceTableSectionItem from "../PriceTableSectionItem";
import { useContext } from "react";
import { TableContext } from "@/app/context";

const PriceTable = () => {
  const isDesktop = useIsDesktop();
  const totalColSpan = isDesktop ? 5 : 3;
  const { total } = useContext(TableContext);

  return (
    <div className="flex justify-center px-6 lg:px-16 py-14 lg:py-24">
      <table
        className="w-full text-center border-separate border-spacing-0"
        border={1}
      >
        <thead className="bg-[#F2F4F5] text-[#1F2D3D] uppercase tracking-wide">
          <tr>
            <th className="border border-[#E1E4E5] rounded-tl-lg text-sm md:text-base p-2 md:p-3 py-4 md:py-6 hidden md:table-cell">
              № з/п
            </th>
            <th className="border border-[#E1E4E5] rounded-tl-lg md:rounded-tl-none text-sm md:text-base p-2 md:p-3 py-4 md:py-6">
              Види виконання робіт/послуг
            </th>
            <th className="border border-[#E1E4E5] text-sm md:text-base p-2 md:p-3 py-4 md:py-6 hidden md:table-cell">
              Один. Виміру
            </th>
            <th className="border border-[#E1E4E5] text-sm md:text-base p-2 md:p-3 py-4 md:py-6">
              Тариф
            </th>
            <th className="border border-[#E1E4E5] text-sm md:text-base p-2 md:p-3 py-4 md:py-6">
              Оцін. Кільк.
            </th>
            <th className="border border-[#E1E4E5] text-sm md:text-base rounded-tr-lg p-2 md:p-3 py-4 md:py-6">
              Оцін. Сума
            </th>
          </tr>
        </thead>
        <tbody>
          {priceTableItems.map((section, index) => (
            <PriceTableSectionItem key={index} section={section} />
          ))}
        </tbody>
        <tfoot className="sticky bottom-0 z-10 bg-[#F7F9FA]">
          <tr>
            <td
              colSpan={totalColSpan}
              className="text-[#1F2D3D] border border-[#E1E4E5] uppercase font-bold text-sm md:text-base p-2 md:p-3 py-6 md:py-8"
            >
              ВСЬОГО по кошторису
            </td>
            <td className="border border-[#E1E4E5] text-[#1F2D3D] text-sm md:text-base p-2 md:p-3">
              {total}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PriceTable;
