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
                folders: [
                  {
                    id: 1,
                    title: "ЗАМКИ Врезые",
                    idFolder: "111",
                    code: "1231231",
                    level: "1",
                    children: [
                      {
                        id: 1,
                        title: "МЕТТЭМ г.Балашиха",
                        idFolder: "333",
                        code: "3532535",
                        level: "2",
                        children: [
                          {
                            id: 1,
                            title: "КЛАССИКА",
                            idFolder: "666",
                            code: "34645",
                            level: "3",
                          }
                        ]
                      },
                      {
                        id: 2,
                        title: "МЕТТЭМ г.Балашиха",
                        idFolder: "444",
                        code: "45656456",
                        level: "2",
                      },
                    ]
                  },
                  {
                    id: 2,
                    title: "Дверные Замки",
                    idFolder: "222",
                    code: "8979878",
                    level: "1",
                    children: [
                      {
                        id: 1,
                        title: "Test",
                        idFolder: "777",
                        code: "45656456",
                        level: "2"
                      },
                      {
                        id: 2,
                        title: "Test 2",
                        idFolder: "888",
                        code: "45656456",
                        level: "2"
                      }
                    ]
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
