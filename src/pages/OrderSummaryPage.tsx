import { lazy } from "react";
import { cartItems } from "../lib/cartItems.ts";

const Layout = lazy(() => import("../components/Layout.tsx"));
const OrderComponent = lazy(() => import("../components/order/OrderComponent.tsx"));
const PaymentOptions = lazy(() => import("../components/order/PaymentOptions.tsx"));

const OrderSummaryPage: React.FC = () => {
  return (
    <Layout>
      <div className="w-full min-h-screen px-4 lg:px-20 bg-bgHero">
        <div className="w-full">
          <p className="w-full py-6 text-base lg:text-2xl leading-6 font-bold">Order Summary</p>

          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <OrderComponent cartItems={cartItems} />
            </div>
            <div className="w-full lg:w-1/2">
              <PaymentOptions />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrderSummaryPage;