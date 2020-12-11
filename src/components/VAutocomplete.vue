<template>
  <section class="v-autocomplete">
    <div class="v-autocomplete__label">{{ label }}</div>
    <div
      tabindex="0"
      @click="activeBtn = !activeBtn"
      class="v-autocomplete-title"
      :class="[activeBtn ? 'btn-up' : 'btn-down']"
    >
      {{ title }}
    </div>
    <div v-if="activeBtn" class="v-autocomplete-list">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="v-autocomplete-item"
        @click="setValue(item.value)"
      >
        {{ item.value }}
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["items", "label", "modelValue"],
  name: "v-autocomplete",
  data() {
    return {
      activeBtn: false,
    };
  },
  computed: {
    title() {
      return this.modelValue ? this.modelValue : "Выберите должность";
    },
  },
  methods: {
    setValue(value) {
      this.$emit("update:modelValue", value);
      this.activeBtn = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.v-autocomplete {
  min-width: 200px;
  &-title {
    outline: none;
    padding: 6px 12px;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 2px 8px 1px rgba(34, 60, 80, 0.2);
    font-size: 12px;

    cursor: pointer;
    position: relative;
    background-color: #ffffff;
    &:hover {
      background-color: #dadada;
    }
  }
  &__label {
    color: #4c5ca7;
    font-weight: bold;
    margin-bottom: 6px;
  }
  &-list {
    background-color: #ffffff;
    box-shadow: 0px 2px 8px 1px rgba(34, 60, 80, 0.2);
  }
  &-item {
    font-size: 12px;
    cursor: pointer;
    border-bottom: 1px solid#dadada;
    margin-bottom: 2px;
    padding: 8px 12px;
    &:hover {
      background-color: #dadada;
    }
    &:last-child {
      margin-bottom: 0;
      border-bottom: 1px solid transparent;
    }
  }
}
.btn {
  &-up,
  &-down {
    &:after {
      position: absolute;
      right: 10px;
    }
  }
  &-up {
    &:after {
      content: url("../assets/img/arrow-up.svg");
    }
  }
  &-down {
    &:after {
      content: url("../assets/img/arrow-down.svg");
    }
  }
}
</style>
