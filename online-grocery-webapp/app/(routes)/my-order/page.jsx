'use client';
import GlobalApi from '@/app/_utils/GlobalApi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import moment from 'moment';
import MyOrderItem from '@/app/_components/MyOrderItem';

function MyOrder() {
  const jwt = sessionStorage.getItem('jwt');
  const user = JSON.parse(sessionStorage.getItem('user'));
  const [orderLists, setOrderList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!jwt) {
      router.replace('/');
    }
    getMyOrder();
  }, []);
  const getMyOrder = async () => {
    const orderList = await GlobalApi.getMyOrder(user.id, jwt);
    console.log(orderList);
    setOrderList(orderList);
  };

  return (
    <div>
      <h2 className="p-3 bg-green-500 text-xl fofnt-bold text-center text-white">
        My Order
      </h2>
      <div className="py-8 mx-7 md:mx-20">
        <h2 className="text-3xl font-bold text-green-600">Order History</h2>
        <div>
          {orderLists.map((items, i) => (
            <Collapsible key={i}>
              <CollapsibleTrigger>
                <div className="border p-2 bg-slate-400 flex gap-10 md:gap-24">
                  <h2>
                    Order Date :{moment(items?.createdAt).format('DD/MMM/yyyy')}
                  </h2>
                  <h2>Total Amount: {items?.totalOrderAmount}</h2>
                  <h2>Status:Pending</h2>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {items.orderItemList.map((order, index_) => (
                  <MyOrderItem orderItem={order} key={index_} />
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
