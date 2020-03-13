// import HTTP from "../http-common";

/**
 * Получение данных для Взаиморасчетов
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
                "mutualSettlement": [
                  {
                    id: 1,
                    date: "2020-02-13T12:12:12",
                    sum: 4260.13
                  },
                  {
                    id: 2,
                    date: "2020-02-14T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 3,
                    date: "2020-02-15T12:12:12",
                    sum: 4260.13
                  },
                  {
                    id: 4,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
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
