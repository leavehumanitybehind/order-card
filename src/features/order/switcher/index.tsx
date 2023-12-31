import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Row, Space, Switch, Col } from "antd";
import { getCalcValues, setCalcValue } from "entities/order/model";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Timer } from "../timer";
import { useDispatch } from "react-redux";

export const Swither = () => {
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);
  const [isSwither, setIsSwither] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState("price");

  const { desired_price } = useSelector(getCalcValues);
  return (
    <>
      <div className="flex mb-2">
        <div className="flex items-center gap-2 mb-2">
          <Switch
            className="bg-grey2"
            onChange={() => setIsSwither(!isSwither)}
          />
          <span className="text-[10px] font-bold text-grey3">
            When Price is Reached
          </span>
          <InfoCircleOutlined onClick={() => setIsModal(true)} />
        </div>
      </div>

      {isSwither && (
        <div>
          <div className="flex items-stretch gap-2 mb-2">
            <Input
              type="number"
              prefix="IRR"
              value={desired_price}
              onChange={(e) =>
                dispatch(setCalcValue({ desired_price: +e.target.value }))
              }
            />

            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => setIsActiveBtn("price")}
                className={`${
                  isActiveBtn === "price"
                    ? "bg-[#7346fb] text-white"
                    : "bg-grey1 text-grey3"
                } border border-gray2 text-xs rounded-md px-2`}
              >
                PRICE
              </button>
              <button
                type="button"
                onClick={() => setIsActiveBtn("percent")}
                className={`${
                  isActiveBtn === "percent"
                    ? "bg-[#7346fb] text-white"
                    : "bg-grey1 text-grey3"
                } border border-gray2 text-xs rounded-md px-2`}
              >
                %
              </button>
            </div>
          </div>
          <Timer />
        </div>
      )}

      <Modal
        title="When Price is Reached"
        open={isModal}
        onOk={() => setIsModal(false)}
        onCancel={() => setIsModal(false)}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Modal>
    </>
  );
};
