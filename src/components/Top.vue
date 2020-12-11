<template>
  <header class="header">
    <h2 class="header__title">Список экспертов по оценке и руководителей</h2>
    <section class="header-items">
      <section class="header-filter">
        <v-input label="ID" type="text" placeholder="Введите ID" v-model="id" />
        <v-input
          label="ФИО"
          type="text"
          placeholder="Введите ФИО участника"
          v-model="fullname"
        />
        <v-autocomplete
          label="Должность"
          :items="positions"
          v-model="position"
        />
        <v-input
          label="Почта (логин)"
          type="email"
          placeholder="Введите email участника"
          v-model="login"
        />
      </section>
      <button class="v-btn" @click="sortUsers">Применить фильтры</button>
    </section>
  </header>
</template>

<script>
import VAutocomplete from "./VAutocomplete.vue";
import VInput from "./VInput";
import { mapState } from "vuex";
export default {
  props: ["modelValue"],
  name: "top",
  components: {
    VInput,
    VAutocomplete,
  },
  data: () => ({
    id: null,
    fullname: "",
    position: "",
    login: "",
    positions: [
      { value: "Руководитель" },
      { value: "HR" },
      { value: "Аналитик" },
    ],
  }),
  computed: {
    ...mapState({ users: (state) => state.users }),
  },
  mounted() {
    this.$emit("update:modelValue", this.users);
  },
  methods: {
    sortUsers() {
      let arr = this.users;
      arr = arr.filter(
        (elem) =>
          Number(elem.id) === Number(this.id) ||
          elem.fullname.toLowerCase() === this.fullname.toLowerCase().trim() ||
          elem.login === this.login ||
          elem.position === this.position
      );
      this.$emit("update:modelValue", arr);
    },
  },
};
</script>
