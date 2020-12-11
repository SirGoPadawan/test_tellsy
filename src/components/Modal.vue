<template>
  <section class="modal" v-if="modal">
    <section class="modal-form">
      <button class="modal__btn-close" @click="close"></button>
      <h3 class="modal__title">
        Добавление данных о экспертах по оценке и руководителей
      </h3>
      <VInput label="Дата регистрации" type="date" class="ma" v-model="date" />
      <VInput label="ФИО" type="text" class="ma" v-model="fullname" />
      <VAutocomplete
        label="Должность"
        :items="positions"
        class="ma"
        v-model="position"
      />
      <VInput label="Почта (Логин)" type="email" class="ma" v-model="login" />
      <VInput label="Пароль" type="text" class="ma" v-model="password" />
      <VInput
        label="Телефон, привязанный к мессенджеру"
        type="tel"
        class="ma"
        v-model="telephone"
      />
      <button class="v-btn" @click="setItem">Сохранить</button>
    </section>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import VInput from "./VInput";
import VAutocomplete from "./VAutocomplete";
export default {
  components: {
    VInput,
    VAutocomplete,
  },
  props: ["modal"],
  data() {
    return {
      date: "2020-01-11",
      fullname: "Егоров Егор Егорович",
      position: "",
      password: "test123",
      login: "msim@gmail.ru",
      telephone: "+7 898 654 55 42",
      positions: [
        { value: "Руководитель" },
        { value: "HR" },
        { value: "Аналитик" },
      ],
    };
  },
  computed: {
    ...mapState({ users: (state) => state.users }),
    id() {
      let newId = null;
      this.users.map((elem, index) => {
        if (this.users.length === index + 1) {
          newId = elem.id + 1;
        }
      });
      return newId;
    },
  },
  methods: {
    ...mapMutations(["updateState"]),
    close() {
      this.$emit("update:modal", false);
    },
    setItem() {
      const item = {
        id: this.id,
        date: this.date,
        fullname: this.fullname,
        position: this.position,
        login: this.login,
        password: this.password,
        telephone: this.telephone,
        select: false,
      };
      console.log(item);
      this.updateState(item);
      this.close();
    },
  },
};
</script>
<style lang="scss" scoped>
.ma {
  margin-bottom: 20px;
  max-width: 200px;
}
</style>
