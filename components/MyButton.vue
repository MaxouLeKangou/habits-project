<template>
  <component 
    :is="typeComponent"
    :to="props.type === 'NuxtLink' ?? link"
    class="button"
    :class="{
      '-outline': variant === 'outline',
      '-full': size === 'full',
      '-small': size === 'small',
    }"
    :disabled="disabled"
  >
    {{ label }}
  </component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  label: string
  size?: string
  disabled?: boolean
  variant?: 'primary' | 'outline'
  type: {
    type: 'button' | 'NuxtLink'
    default: 'button'
  }
  link?: string
}>()

const typeComponent = (() => {
    switch (props.type) {
        case 'button':
            return 'button';

        case 'NuxtLink':
            return resolveComponent('NuxtLink');
			
        default:
            return 'button';
    }
})();
</script>

<style lang="scss">
.button {
  $self: &;
  background: $primary-base;
  color: $sky-white;
  padding: rem(16px) rem(32px);
  border-radius: rem(48px);
  border: 1px solid $primary-base;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s;

  &.-outline {
    background: transparent;
    color: $primary-base;

    &:hover {
      color: $primary-dark;
      border-color: $primary-dark;
    }
  }

  &:hover {
    background: $primary-dark;
  }

  &.-outline {
    background: transparent;
    color: $primary-base;
    &:hover {
      color: $primary-dark;
      border-color: $primary-dark;
    }
  }

  &:disabled {
    color: $sky-dark;
    background: $sky-light;
    border-color: $sky-light;
    cursor: not-allowed;
  }

  &.-small {
    padding: rem(8px) rem(16px);
  }

  &.-full {
    width: 100%;
    max-width: rem(520px);
  }
}
</style>
