import Razorpay from "razorpay";
import crypto from "crypto";

export const createinstance = (key_id, key_secret) => {
  var instance = new Razorpay({
    key_id,
    key_secret,
  });
  return instance;
};

export const createOrder = (instance, amount, currency, OrderId, key_id) => {
  var options = {
    amount,
    currency,
    receipt: OrderId,
  };
  instance.orders.create(options, function (err, order) {
    return {
      order,
      key_id,
    };
  });
};

export const verifyOrder = (
  keysecret,
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature
) => {
  const hash = crypto
    .createHmac("sha256", keysecret)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");
  if (hash === razorpay_signature) {
    return "Payment Verified";
  } else {
    return "Payment Failed";
  }
};

export const createRefund = async (
  instance,
  razorpay_payment_id,
  refundID,
  amountToRefund,
  speed
) => {
  const refundData = await instance.payments.refund(razorpay_payment_id, {
    amount: amountToRefund,
    speed,
    receipt: refundID,
  });

  return refundData;
};

export const getRefundStatus = async (
  instance,
  razorpay_payment_id,
  refundID
) => {
  const refundstatus = await instance.payments.fetchRefund(
    razorpay_payment_id,
    refundID
  );
  return refundstatus;
};
