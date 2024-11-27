<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    class="input"
    v-model="inputValue"
    @input="$emit('update:modelValue', $event?.target)"
  />
</template>

<style lang="scss">
.input {
  display: inline-block;
  background: transparent;
  color: $lnk-lighter;
  outline: transparent;
  border: 1px solid $sky-light;
  padding: rem(16px);
  border-radius: rem(8px);
  transition: all 0.3s;
  box-sizing: border-box;

  &:focus {
    border-color: $primary-base;
    color: $lnk-darkest;
  }

  &:disabled {
    background: $sky-lightest;
    border-color: $sky-lighter;
    color: $sky-base;
    cursor: not-allowed;
  }

  &.-error {
    border-color: $red-base;
    color: $lnk-darkest;
  }

  &.-full {
    width: 100%;
  }
}
</style>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps<{
  type: string
  disabled?: boolean
  placeholder?: string
  modelValue: string
}>()

const inputValue = ref(props.modelValue)

defineEmits(['update:modelValue'])
</script>
