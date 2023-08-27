import { Slider } from "antd";
import { getBalance, getCalcValues, setCalcValue } from "entities/order/model";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { SliderList } from "shared/libs/const";

import styles from "./styles.module.scss";

export const ToggleAmount = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector(getBalance);
  const { balance_percent } = useSelector(getCalcValues);
  return (
    <Slider
      railStyle={{ backgroundColor: "#e0cbf3" }}
      trackStyle={{ backgroundColor: "rgb(196 151 237)" }}
      marks={SliderList}
      included={true}
      defaultValue={0}
      value={balance_percent}
      onChange={(value) =>
        dispatch(
          setCalcValue({ balance_percent: value, from: amount * (value / 100) })
        )
      }
    />
  );
};
