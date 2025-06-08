export interface PriceItem {
  number: number;
  typeOfWork: string;
  unit: string;
  tariff: number;

}

export interface PriceItemsSettings {
  title: string;
  items: PriceItem[];
}
