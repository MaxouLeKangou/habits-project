<template>
  <div>
    <label :for="label" class="input__label">{{ label }}</label>
    <input
      :id="label"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="input"
      :value="modelValue"
      :class="{
        '-full': size === 'full',
      }"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  size?: string
  label: string
  type: string
  disabled?: boolean
  placeholder?: string
  modelValue: string
}>()

defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.input__label {
  @include sr-only();
}
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
    max-width: rem(520px);
  }
}
</style>
