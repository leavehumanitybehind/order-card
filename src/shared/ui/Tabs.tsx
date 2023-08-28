import { getActiveTab, setIsActiveTab } from "entities/order/model";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { TabItem } from "shared/libs/types";

export const Tab = ({ arr }: { arr: TabItem[] }) => {
  const dispatch = useDispatch();
  const activeTab = useSelector(getActiveTab);

  return (
    <div className="w-full flex mb-4">
      {arr?.map((el: TabItem) => {
        return (
          <button
            type="button"
            onClick={() => dispatch(setIsActiveTab(el))}
            className={`w-[50%] text-md p-2 rounded-md border border-grey1 ${
              activeTab.key == el.key
                ? "bg-[#f1d2d2] border-error text-error"
                : "bg-grey1 text-success"
            }`}
            key={el.key}
          >
            {el.label}
          </button>
        );
      })}
    </div>
  );
};
