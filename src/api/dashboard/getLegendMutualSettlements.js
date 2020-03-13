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
                status: "Оплата просрочена",
                val: false
              },
              "errors": []
            }
        }),
      500
    );
  });
};
