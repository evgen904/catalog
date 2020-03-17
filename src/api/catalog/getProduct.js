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
                "product": [
                  {
                    id: 1,
                    combineOrder: false,
                    code: "003728515",
                    idFolder: "666",
                    title: "Замок Врезной apecs 100/60CR",
                    piecesPerPack: 28,
                    piecesInMinibox: 7,
                    warranty: "3 года",
                    media: [
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/31e/001561.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/e7a/001561_2.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/3fd/001561_3.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/058/001561_4.jpg"
                      }
                    ],
                    specifications: [
                      {
                        title: "Тип упаковки",
                        value: "Коробка"
                      },
                      {
                        title: "Назначение",
                        value: "Общее"
                      },
                      {
                        title: "Рекомендован для установки в входные двери",
                        value: "Да"
                      },
                      {
                        title: "Рекомендован для установки в межкомнатные двери",
                        value: "Да"
                      },
                      {
                        title: "Тип крепления",
                        value: "Лицевая планка"
                      },
                      {
                        title: "Тип ригелей",
                        value: "Цилиндрические"
                      },
                      {
                        title: "Количество ригелей",
                        value: "3"
                      },
                      {
                        title: "Вылет ригелей",
                        value: "18 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      }
                    ]
                  },
                  {
                    id: 2,
                    combineOrder: false,
                    code: "4563567567",
                    idFolder: "666",
                    title: "Девиатор Врезной - НБ 8.04.002",
                    piecesPerPack: 10,
                    piecesInMinibox: 4,
                    warranty: "2 года",
                    media: [
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/446/589569.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/43f/589569_2.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/d48/589569_3.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/00a/589569_4.jpg"
                      }
                    ],
                    specifications: [
                      {
                        title: "Тип упаковки",
                        value: "ы ваыв а "
                      },
                      {
                        title: "Назначение",
                        value: "ыв аываыва"
                      },
                      {
                        title: "Рекомендован для установки в входные двери",
                        value: "ы ваыва"
                      },
                      {
                        title: "Рекомендован для установки в межкомнатные двери",
                        value: "Да"
                      },
                      {
                        title: "Тип крепления",
                        value: "Лицевая планка"
                      },
                      {
                        title: "Тип ригелей",
                        value: "Цилиндрические"
                      },
                      {
                        title: "Количество ригелей",
                        value: "3"
                      },
                      {
                        title: "Вылет ригелей",
                        value: "18 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      }
                    ]
                  },
                  {
                    id: 3,
                    combineOrder: false,
                    code: "234234234",
                    idFolder: "666",
                    title: "Test - НБ 8.04.002",
                    piecesPerPack: 10,
                    piecesInMinibox: 4,
                    warranty: "2 года",
                    media: [
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/446/589569.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/43f/589569_2.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/d48/589569_3.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/00a/589569_4.jpg"
                      }
                    ],
                    specifications: [
                      {
                        title: "Тип упаковки",
                        value: "ы ваыв а "
                      },
                      {
                        title: "Назначение",
                        value: "ыв аываыва"
                      },
                      {
                        title: "Рекомендован для установки в входные двери",
                        value: "ы ваыва"
                      },
                      {
                        title: "Рекомендован для установки в межкомнатные двери",
                        value: "Да"
                      },
                      {
                        title: "Тип крепления",
                        value: "Лицевая планка"
                      },
                      {
                        title: "Тип ригелей",
                        value: "Цилиндрические"
                      },
                      {
                        title: "Количество ригелей",
                        value: "3"
                      },
                      {
                        title: "Вылет ригелей",
                        value: "18 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      }
                    ]
                  },
                  {
                    id: 4,
                    combineOrder: false,
                    code: "5645434535",
                    idFolder: "666",
                    title: "Врезной test - НБ 8.04.002",
                    piecesPerPack: 10,
                    piecesInMinibox: 4,
                    warranty: "2 года",
                    media: [
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/446/589569.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/43f/589569_2.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/d48/589569_3.jpg"
                      },
                      {
                        url: "https://www.avtoall.ru/product_pictures/big/00a/589569_4.jpg"
                      }
                    ],
                    specifications: [
                      {
                        title: "Тип упаковки",
                        value: "ы ваыв а "
                      },
                      {
                        title: "Назначение",
                        value: "ыв аываыва"
                      },
                      {
                        title: "Рекомендован для установки в входные двери",
                        value: "ы ваыва"
                      },
                      {
                        title: "Рекомендован для установки в межкомнатные двери",
                        value: "Да"
                      },
                      {
                        title: "Тип крепления",
                        value: "Лицевая планка"
                      },
                      {
                        title: "Тип ригелей",
                        value: "Цилиндрические"
                      },
                      {
                        title: "Количество ригелей",
                        value: "3"
                      },
                      {
                        title: "Вылет ригелей",
                        value: "18 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
                      },
                      {
                        title: "Диаметр ригеля",
                        value: "12 мм"
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
