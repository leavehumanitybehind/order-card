import { WalletOutlined } from "@ant-design/icons";
import { Col, Divider, Slider, Space } from "antd";

import Input from "antd/es/input/Input";
import { getBalance, getCalcValues, getCourse, setCalcValue } from "entities/order/model";

import { Swither } from "features/order/switcher";
import { Timer } from "features/order/timer";
import { ToggleAmount } from "features/order/toggle-amount";
import { useSelector } from "react-redux";

import styles from './styles.module.scss'
import { useDispatch } from "react-redux";
import { useEffect } from "react";


export const OrderContent = () => {
  const dispatch = useDispatch()

  const {amount,currency} = useSelector(getBalance)
  const {from,to} = useSelector(getCalcValues)
  const {to:toCourse}= useSelector(getCourse)

  useEffect(()=>{
    dispatch(setCalcValue({to:from*toCourse}))
  },[from])
  

  return (
    <Space size="small" direction="vertical" className="w-full">
      <div className={styles.balance}><WalletOutlined /> {amount} {currency}</div>
      <Input className={styles.input} prefix="Send" value={from} onChange={(e)=>dispatch(setCalcValue({from:e.target.value}))} suffix="BTC" status={from > amount ? 'error' : '' }/>
      <Input  className={styles.input} prefix="Recieve" value={to} onChange={(e)=>dispatch(setCalcValue({to:e.target.value, from:(+e.target.value/toCourse).toFixed(6)}))}  suffix="IRR"/>
      <ToggleAmount />
      <Divider />
      <Swither />
      <Timer />
      <Divider />
    </Space>
  );
};
