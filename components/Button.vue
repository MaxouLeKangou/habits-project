<template>
    <component
:is="typeComponent" :to="props.type === 'NuxtLink' ? link : undefined" class="button" :class="{
        '-outline': variant === 'outline',
        '-full': full,
        '-small': small,
    }">
        {{ label }}
    </component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    full: {
        type: Boolean,
        default: false
    },
    small: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'button'
    },
    link: {
        type: String,
        default: ''
    },
})

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
    background: linear-gradient(45deg, rgba($primary-100,1) 0%, rgba($tertiary-100,1) 50%, rgba($secondary-100,1) 100%);
    color: $light-100;
    padding: rem(20px) rem(40px);
    border: none;
    font-size: rem(14px);
    border-radius: rem(100px);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.3s;

    // &.-outline {
    //     background: transparent;
    //     color: $primary-base;

    //     &:hover {
    //         color: $primary-dark;
    //         border-color: $primary-dark;
    //     }
    // }

    &:hover {
        background: linear-gradient(45deg, rgba($secondary-100,1) 0%, rgba($tertiary-100,1) 50%, rgba($primary-100,1) 100%);
    }

    // &:disabled {
    //     color: $sky-dark;
    //     background: $sky-light;
    //     border-color: $sky-light;
    //     cursor: not-allowed;
    // }

    &.-small {
        font-size: rem(12px);
        padding: rem(10px) rem(20px);
    }

    &.-full {
        width: 100%;
        max-width: rem(520px);
    }
}
</style>
