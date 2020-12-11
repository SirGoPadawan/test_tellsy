<template>
  <main class="main">
    <Modal v-model:modal="modal" />
    <section class="table">
      <section class="table-header">
        <div class="table-row">
          <div class="table-cell cell-id">ID</div>
          <div class="table-cell">Дата регистрации</div>
          <div class="table-cell">ФИО</div>
          <div class="table-cell">Должность</div>
          <div class="table-cell">Логин (почта)</div>
          <div class="table-cell">Пароль</div>
          <div class="table-cell">Телефон, привязанный к мессендежу</div>
        </div>
      </section>
      <section class="table-list">
        <div
          class="table-row"
          :class="[id === user.id ? 'table-row_select' : '']"
          v-for="(user, index) in users"
          :key="index"
        >
          <input
            type="checkbox"
            class="table__checkbox"
            :id="user.id"
            :checked="user.select"
            @click="setClass"
          />
          <div class="table-cell cell-id">{{ user.id }}</div>
          <div class="table-cell">{{ user.date }}</div>
          <div class="table-cell">{{ user.fullname }}</div>
          <div class="table-cell">{{ user.position }}</div>
          <div class="table-cell cell-login">{{ user.login }}</div>
          <div class="table-cell ">
            <div class="cell-pass">{{ user.password }}</div>
          </div>
          <div class="table-cell">{{ user.telephone }}</div>
        </div>
      </section>
      <section class="table-options">
        <div class="paginator" v-show="arrLength * 3 > 3">
          <button class="btn-left" @click="prev()"></button>
          <div
            v-for="(num, index) in arrLength"
            :key="index"
            class="paginator__item"
            @click="handlerClick(index)"
            :class="[index === indexPage ? 'paginator__item_active' : '']"
          >
            {{ num }}
          </div>
          <button class="btn-right" @click="next()"></button>
        </div>
        <button class="v-btn table-btn" @click="handlerModal">
          Добавить пользователя
        </button>
      </section>
    </section>
  </main>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Modal from "./Modal";
export default {
  props: ["modelValue"],
  components: {
    Modal,
  },
  name: "userTable",
  data() {
    return {
      id: null,
      modal: false,
      usersPerPage: 3,
      userStart: 0,
      userEnd: 3,
      indexPage: 0,
      defUsers: [],
    };
  },
  computed: {
    arrLength() {
      return Math.ceil(this.modelValue.length / this.usersPerPage);
    },
    users() {
      return JSON.parse(JSON.stringify(this.modelValue)).slice(
        this.userStart,
        this.userEnd
      );
    },
  },
  mounted() {
    this.defUsers = this.modelValue;
  },
  methods: {
    next() {
      if (this.indexPage >= this.arrPage - 1) return;
      this.handlerClick(this.indexPage + 1);
    },
    prev() {
      if (this.indexPage <= 0) return;
      this.handlerClick(this.indexPage - 1);
    },
    handlerModal() {
      this.modal = true;
    },
    handlerClick(index) {
      this.indexPage = index;
      this.userStart = this.usersPerPage * this.indexPage;
      this.userEnd = this.userStart + this.usersPerPage;
    },
    setClass(e) {
      let id = Number(e.target.id);
      if (this.id === id) {
        this.id = null;
        this.users.map((elem) => {
          elem.select = false;
        });
        return;
      }
      this.id = id;
      this.users.map((elem) => {
        elem.select = false;
        if (id === elem.id) {
          elem.select = true;
        }
      });
    },
  },
};
</script>
