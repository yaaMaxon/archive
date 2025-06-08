"use client";

import PriceTableRowItem from "../PriceTableRowItem";
import { PriceItemsSettings } from "../types/priceItemsSettings";

interface PriceItemsProps {
  section: PriceItemsSettings;
}

const PriceTableSectionItem = ({ section }: PriceItemsProps) => {
  const { title, items } = section;

  return (
    <>
      <tr>
        <td
          colSpan={6}
          className="bg-[#F7F9FA] text-[#1F2D3D] border border-[#E1E4E5] uppercase font-bold text-sm md:text-base p-2 md:p-3 py-6 md:py-8"
        >
          {title}
        </td>
      </tr>
      {items.map(({ number, typeOfWork, unit, tariff }, index) => {
        return (
          <PriceTableRowItem
            number={number}
            typeOfWork={typeOfWork}
            unit={unit}
            tariff={tariff}
            key={index}
          />
        );
      })}
    </>
  );
};

export default PriceTableSectionItem;
