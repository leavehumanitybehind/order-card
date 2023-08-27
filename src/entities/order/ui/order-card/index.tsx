import { Button, Card } from "antd";
import { useState } from "react";

import { TabsList } from "shared/libs/const";

import { OrderHeader } from "../order-header";
import { OrderContent } from "../order-content";

import { Tab } from "shared/ui/Tabs";
import { useSelector } from "react-redux";
import { getActiveTab } from "entities/order/model";

export const OrderCard = () => {
  const activeTab = useSelector(getActiveTab)

  return (
    <Card  title={<OrderHeader />}>
      <Tab arr={TabsList} />
      <OrderContent />
      <div className="flex flex-col mb-4">
        <div className="flex justify-between">
          <p>Fee</p>
          <p>0 IRR</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>0 IRR</p>
        </div>
      </div>
      <button className="w-full bg-error p-2 rounded-md text-white">
        {activeTab.label} Bitcoin
      </button>
    </Card>
  );
};
