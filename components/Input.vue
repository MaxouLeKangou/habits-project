<template>
    <div>
        <label :for="label" class="input__label">{{ label }}</label>
        <component
:is="type === 'textarea' ? 'textarea' : 'input'" :id="label" :type="type" :placeholder="placeholder" :disabled="disabled"
            rows="4"
            class="input"
            :value="modelValue"
            :class="{
                '-full': full,
                '-textarea': type === 'textarea',
            }"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"/>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    full: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: '',
    },
    modelValue: {
        type: String,
        default: '',
    },
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.input__label {
    @include sr-only();
}

.input {
    display: inline-block;
    background: transparent;
    color: $light-200;
    font-size: rem(14px);
    outline: transparent;
    border: 1px solid $dark-300;
    padding: rem(12px) rem(20px);
    border-radius: rem(8px);
    transition: all 0.3s;
    box-sizing: border-box;

    &:focus {
        border-color: $tertiary-100;
        color: $light-100;
    }

    // &:disabled {
    //     background: $sky-lightest;
    //     border-color: $sky-lighter;
    //     color: $sky-base;
    //     cursor: not-allowed;
    // }

    &.-textarea {
        resize: none;
        // min-height: rem(120px);
    }

    &.-error {
        border-color: $red-100;
    }

    &.-full {
        width: 100%;
        max-width: rem(520px);
    }
}
</style>
