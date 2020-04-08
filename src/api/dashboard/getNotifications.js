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
                    message: "Прошло согласование по заказу №1",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 2,
                    date: "2020-02-14T12:12:12",
                    message: "Прошло согласование по заказу №2",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 3,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №3",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 4,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №4",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 5,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №4",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 6,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №4",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 7,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №4",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 8,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №4",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 9,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №4",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 10,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №4",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 11,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №4",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
                  },
                  {
                    id: 12,
                    date: "2020-02-15T12:12:12",
                    message: "Прошло согласование по заказу №4",
                    note: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi at atque aut eius enim sequi! Cum eos harum ipsam rerum sit, vel vero voluptates. Libero quidem soluta temporibus totam.",
                    visibleNote: false
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
