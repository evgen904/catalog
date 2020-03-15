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
              "products": [
                {
                  id: 1,
                  combineOrder: false,
                  code: "003728515",
                  idFolder: "666",
                  title: "Замок Врезной apecs 100/60CR",
                  remainder: "20",
                  byAgreement: true,
                  priceDealer: 914.86,
                  priceBasic: 1089.12,
                  minibox: "",
                  packaging: "10"
                },
                {
                  id: 2,
                  combineOrder: false,
                  code: "234234234",
                  idFolder: "666",
                  title: "Девиатор Врезной - НБ 8.04.002",
                  remainder: "15",
                  byAgreement: false,
                  priceDealer: 512.04,
                  priceBasic: 2560.20,
                  minibox: "",
                  packaging: "10"
                },
                {
                  id: 3,
                  combineOrder: false,
                  code: "003728515",
                  idFolder: "777",
                  title: "Девиатор Врезной - НБ 8.04.002",
                  remainder: "15",
                  byAgreement: false,
                  priceDealer: 512.04,
                  priceBasic: 2560.20,
                  minibox: "",
                  packaging: "10"
                },
                {
                  id: 4,
                  combineOrder: false,
                  code: "234234234",
                  idFolder: "222",
                  title: "Девиатор Врезной - НБ 8.04.002",
                  remainder: "15",
                  byAgreement: false,
                  priceDealer: 512.04,
                  priceBasic: 2560.20,
                  minibox: "",
                  packaging: "10"
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
