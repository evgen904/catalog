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
                  },
                  {
                    id: 5,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 6,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 7,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 8,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 9,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 9,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 10,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 11,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 12,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 13,
                    date: "2020-02-16T12:12:12",
                    sum: 239267.64
                  },
                  {
                    id: 14,
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
