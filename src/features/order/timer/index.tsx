import { FieldTimeOutlined } from "@ant-design/icons";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import { setCalcValue } from "entities/order/model";
import { useDispatch } from "react-redux";

export const Timer = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <FieldTimeOutlined /> Order expires in
      </div>

      <div className="flex items-center gap-2">
        <TimePicker
          format={"HH"}
          className="w-[70px] bg-grey1"
          defaultValue={dayjs("00", "HH")}
          onChange={(e) => dispatch(setCalcValue({ timeOrder: { hh: e } }))}
          showNow={false}
          suffixIcon="hr"
          placeholder=""
        />
        <TimePicker
          format={"mm"}
          className="w-[70px] bg-grey1"
          defaultValue={dayjs("00", "mm")}
          onChange={(e) => dispatch(setCalcValue({ timeOrder: { mm: e } }))}
          showNow={false}
          suffixIcon="min"
          placeholder=""
        />
      </div>
    </div>
  );
};
