<template>
  <label class="v-input__label">
    <p class="v-input__title">{{ label }}</p>
    <input
      :type="type"
      :placeholder="placeholder"
      class="v-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
<script>
export default {
  props: ["label", "type", "placeholder", "modelValue"],
  name: "v-input",
};
</script>
