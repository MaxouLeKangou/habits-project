<template>
    <DialogRoot>
        <DialogTrigger class="dh__button">
			<IconsAdd/>
        </DialogTrigger>
        <DialogPortal>
            <DialogOverlay
                class="dh__overlay"
            />
            <DialogContent
                class="dh__content"
            >
                <DialogTitle class="dh__title">
                    New habit
                </DialogTitle>
                <fieldset class="mb-[15px] flex items-center gap-5">
                    <!-- <Input/> -->
                </fieldset>
                <fieldset class="mb-[15px] flex items-center gap-5">
                    <!-- <Input/> -->
                </fieldset>
                <div class="dh__close">
                    <DialogClose as-child>
                        <IconsClose/>
                    </DialogClose>
                </div>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>

<script setup lang="ts">
import {
    DialogClose,
    DialogContent,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "reka-ui";

const habit = reactive({
	title: '',
	description: '',
});
</script>

<style lang="scss">
.dh {

	&__button {
		background: transparent;
		border:none;
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
	}

	&__title {
		font-weight: 700;
		font-size: rem(24px);
		color: $tertiary-100;
	}

	&__close {
		position: absolute;
		top: rem(20px);
		right: rem(20px);
	}
	
}
</style>
