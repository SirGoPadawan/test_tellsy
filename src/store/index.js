import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      {
        id: 1,
        date: "2020-01-11",
        fullname: "Васильев Василий Васильевич",
        position: "HR",
        login: "babax@mail.ru",
        password: "123456",
        telephone: "+7 928 999 22 22",
        select: false,
      },
      {
        id: 2,
        date: "2020-01-11",
        fullname: "Сергеев Сергей Сергеевич",
        position: "Аналитик",
        login: "dadax@mail.ru",
        password: "123456",
        telephone: "+7 922 999 22 22",
        select: false,
      },
      {
        id: 3,
        date: "2020-01-11",
        fullname: "Максимов Максим Максимович",
        position: "HR",
        login: "maksim@gmail.ru",
        password: "123456",
        telephone: "+7 898 654 55 44",
        select: false,
      },
      {
        id: 4,
        date: "2020-01-11",
        fullname: "Егоров Егор Егорович",
        position: "Руководитель",
        login: "msim@gmail.ru",
        password: "123456",
        telephone: "+7 898 654 55 42",
        select: false,
      },
      {
        id: 5,
        date: "2020-01-11",
        fullname: "Константинов Константин Константинович",
        position: "HR",
        login: "mak@gmail.ru",
        password: "123456",
        telephone: "+7 898 654 55 41",
        select: false,
      },
      {
        id: 6,
        date: "2020-01-11",
        fullname: "Малов Сергей Сергеевич",
        position: "Руководитель",
        login: "maim@gmail.ru",
        password: "123456",
        telephone: "+7 898 654 55 43",
        select: false,
      },
      {
        id: 7,
        date: "2020-01-11",
        fullname: "Малов Сергей Сергеевич",
        position: "Руководитель",
        login: "maim@gmail.ru",
        password: "123456",
        telephone: "+7 898 654 55 43",
        select: false,
      },
    ],
  },
  mutations: {
    updateState(state, item) {
      state.users.push(item);
    },
  },
});
