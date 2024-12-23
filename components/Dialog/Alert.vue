<template>
    <AlertDialogRoot v-model:open="open">
        <AlertDialogTrigger class="da__icon">
            <slot name="icon" />
        </AlertDialogTrigger>
        <AlertDialogPortal>
            <AlertDialogOverlay class="da__overlay"/>
            <AlertDialogContent class="da__content">
                <AlertDialogTitle class="da__title">
                    Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription class="da__description">
                    This action cannot be undone. This will permanently delete the current selection.
                </AlertDialogDescription>
                <div class="da__buttons">
                    <AlertDialogCancel class="da__button -outline">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction class="da__button -red" @click="onDelete()">
                        Delete
                    </AlertDialogAction>
                </div>
            </AlertDialogContent>
        </AlertDialogPortal>
    </AlertDialogRoot>
</template>

<script setup lang="ts">
import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogPortal,
    AlertDialogRoot,
    AlertDialogTitle,
    AlertDialogTrigger,
} from 'reka-ui'

const open = ref(false)

const onDelete = () => {
    open.value = false
    emit('delete')
}

const emit = defineEmits(['delete'])
</script>

<style lang="scss">
.da {

	&__icon {
		background: transparent;
		border: none;
        padding: 0 !important;
	}

	&__overlay {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		inset: 0;
		z-index: 30;
	}

	&__content {
		position: fixed;
		top: 50%;
		left: 50%;
		max-height: 85vh;
		width: 70vw;
		max-width: rem(450px);
		transform: translate(-50%, -50%);
		border-radius: rem(20px);
		background-color: $dark-100;
		padding: rem(30px);
		z-index: 100;
        display: flex;
        flex-direction: column;
        gap: rem(10px);
	}

	&__title {
		font-weight: 700;
		font-size: rem(20px);
		color: $tertiary-100;
	}

    &__description {
        font-weight: 300;
        font-size: rem(14px);
        color: $light-200;
    }

	&__form {
		display: flex;
		flex-direction: column;
		gap: rem(25px);
		margin-top: rem(30px);
	}

	&__fieldset {
		display: flex;
		flex-direction: column;
		gap: rem(10px);
	}

    &__buttons {
        display: flex;
        justify-content: end;
        gap: rem(10px);
        margin-top: rem(20px);
    }

    &__button {
        padding: rem(10px) rem(20px);
        border-radius: rem(5px);
        border: none;
        font-size: rem(14px);
        cursor: pointer;
        color: $light-100;
        background: transparent;
        transition: background 0.3s;

        &.-outline {
            border: rem(1px) solid $dark-300;
        }

        &.-red {
            background-color: $red-100;
        }
    }

	&__close {
		position: absolute;
		top: rem(20px);
		right: rem(20px);
	}
	
}
</style>