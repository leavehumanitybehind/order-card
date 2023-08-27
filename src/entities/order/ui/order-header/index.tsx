import { Col, Row, Statistic } from "antd";
import { useSelector } from "react-redux";

import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

import { getCourse, getCurrency } from "entities/order/model";

import { Btc } from "shared/ui/Btc";

export const OrderHeader = () => {
  const { from_to_usd, dynamic, to: toCourse } = useSelector(getCourse);
  const { from, to } = useSelector(getCurrency);

  return (
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-2">
        <Btc />
        <div>
          <Col>{from.name}</Col>
          <Col>{from.code}</Col>
        </div>
      </div>

      <Row>
        <Col>
          <Col>
            <Statistic
              prefix="$"
              value={from_to_usd}
              valueStyle={{ color: "gray", fontSize: "0.7rem" }}
            />
          </Col>
          <Col>
            <Statistic value={toCourse} />
          </Col>
          <Col>
            <Statistic
              valueStyle={{
                color: `${dynamic < 0 ? "#ec484a" : "#00b947"}`,
                fontSize: "0.8rem",
              }}
              value={dynamic}
              suffix={dynamic < 0 ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
            />
          </Col>
        </Col>
      </Row>
    </div>
  );
};
