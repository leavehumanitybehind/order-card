import { TabItem } from "shared/libs/types";

export type orderState = {
  activeTab:TabItem,
  currency: Currency;
  course: Course;
  balance: Balance;
  toggledPrice: boolean;
  calcValues:Values;
};

type CurrencyItem = {
  code: string;
  name: string;
};

type Balance = {
  amount: number;
  currency: string;

};

type Values = {
  from:number,
  to:number,
  desired_price:number,
  balance_percent:number,
  timeOrder: {
    hh:string,
    mm:string,
  }
}

type Currency = {
  from: CurrencyItem;
  to: CurrencyItem;
};
type Course = {
  to: number;
  from: number;
  from_to_usd: number;
  dynamic: number;
};
