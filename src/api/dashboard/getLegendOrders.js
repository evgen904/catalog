// import HTTP from "../http-common";

/**
 * Получение данных для Легенды заказов
 *
 * @module getNotifications
 * @return {object} Promise
 */

export default () => {
  return new Promise(res => {
    setTimeout(
      () =>
        res({
        data:
          {
            "success": true,
            "data": {
              "legendOrders": {
                goodsOnAgreement: {
                  status: "Есть товары на согласовании",
                  val: true
                },
                areOutstanding: {
                  status: "Есть невыполненные",
                  val: false
                }
              }
            },
            "errors": []
          }
        }),
      500
    );
  });
};
