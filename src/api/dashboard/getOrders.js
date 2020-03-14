// import HTTP from "../http-common";

/**
 * Получение данных для Заказов
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
                "orders": [
                  {
                    id: 1,
                    combineOrder: false,
                    idOrder: "003728515",
                    title: "Хорошие замки - Тагиров",
                    order: 2535325,
                    reserve: 5244549,
                    reserveStatus: "none",
                    reservationPeriod: "2020-02-13T12:12:12"
                  },
                  {
                    id: 2,
                    combineOrder: false,
                    idOrder: "345645763",
                    title: "Хорошие замки - тест",
                    order: 234234234,
                    reserve: 3453453,
                    reserveStatus: "color-red",
                    reservationPeriod: "2020-02-14T12:12:12"
                  },
                  {
                    id: 3,
                    combineOrder: false,
                    idOrder: "567235456",
                    title: "Хорошие замки - тест 2",
                    order: 57878587,
                    reserve: 234234234,
                    reserveStatus: "color-red",
                    reservationPeriod: "2020-02-15T12:12:12"
                  },
                  {
                    id: 4,
                    combineOrder: false,
                    idOrder: "5672346567",
                    title: "Хорошие замки - тест 3",
                    order: 34636346,
                    reserve: 3423423423,
                    reserveStatus: "none",
                    reservationPeriod: "2020-02-16T12:12:12"
                  },
                  {
                    id: 5,
                    combineOrder: false,
                    idOrder: "457477365",
                    title: "Хорошие замки - тест 4",
                    order: 4575765,
                    reserve: 234234234,
                    reserveStatus: "color-green",
                    reservationPeriod: "2020-02-16T12:12:12"
                  },
                  {
                    id: 6,
                    combineOrder: false,
                    idOrder: "45634643",
                    title: "Хорошие замки - тест 5",
                    order: 35567547,
                    reserve: 5244549,
                    reserveStatus: "none",
                    reservationPeriod: "2020-02-17T12:12:12"
                  },
                  {
                    id: 7,
                    combineOrder: false,
                    idOrder: "2352353",
                    title: "Хорошие замки - тест 6",
                    order: 78345636,
                    reserve: 234234234,
                    reserveStatus: "color-green",
                    reservationPeriod: "2020-02-18T12:12:12"
                  },
                  {
                    id: 8,
                    combineOrder: false,
                    idOrder: "57547576",
                    title: "Хорошие замки - тест 7",
                    order: 45737567567,
                    reserve: 34534535,
                    reserveStatus: "none",
                    reservationPeriod: "2020-02-14T12:12:12"
                  },
                  {
                    id: 9,
                    combineOrder: false,
                    idOrder: "52352353245",
                    title: "Хорошие замки - тест 8",
                    order: 356464664,
                    reserve: 45645654,
                    reserveStatus: "none",
                    reservationPeriod: "2020-02-20T12:12:12"
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
