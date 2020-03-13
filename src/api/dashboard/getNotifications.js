// import HTTP from "../http-common";

/**
 * Получение данных для Уведомлений
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
                "notifications": [
                  {
                    id: 1,
                    date: "2020-02-13T12:12:12",
                    message: "Прошло согласование по заказу №1"
                  },
                  {
                    id: 2,
                    date: "2020-02-14T12:12:12",
                    message: "Прошло согласование по заказу №2"
                  },
                  {
                    id: 3,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №3"
                  },
                  {
                    id: 4,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №4"
                  }
                ]
              },
              "errors": []
            }
        }),
      500
    );
  });
};
