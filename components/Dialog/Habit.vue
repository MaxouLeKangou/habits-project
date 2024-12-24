<template>
    <DialogRoot v-model:open="open">
        <DialogTrigger class="dh__icon">
			<slot name="icon"/>
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

				<DialogDescription/>

                <form action="" class="dh__form" @submit.prevent="onSubmit()">
					<fieldset>
						<div class="dh__fieldset">
							<p>Name of the habit</p>
							<Input v-model="data.title" type="text" placeholder="My habit..." full label="Title"/>
						</div>
					</fieldset>
					<fieldset>
						<div class="dh__fieldset">
							<p>Description of the habit</p>
							<Input v-model="data.description" type="textarea" placeholder="The description of my habit..." full label="Description"/>
						</div>
					</fieldset>

					<div class="dh__button">
						<Button label="Validate" type="submit" small/>
					</div>
				</form>
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
	DialogDescription,
    DialogTrigger,
} from "reka-ui";

const props = defineProps({
	habit: {
		type: Object,
		default: null,
	},
});

const isEditing = ref(false);

const data = reactive({
	title: '',
	description: '',
});

if(props.habit) {
	isEditing.value = true;
	data.title = props.habit.title;
	data.description = props.habit.description;
}

async function onSubmit() {
	try  {
		if(isEditing.value === true) {
			const response = await useAPI(`/habits/${props.habit?.id}`, {
				method: "PUT",
				body: {
					title: data.title,
					description: data.description,
				},
				auth: true,
			});

			if (response.error) {
				alert(`Error: ${response.message || "An error occurred"}`);
				return;
			}
		} else {
			const response = await useAPI("/habits", {
				method: "POST",
				body: {
					title: data.title,
					description: data.description,
				},
				auth: true,
			});

			if (response.error) {
				alert(`Error: ${response.message || "An error occurred"}`);
				return;
			}
		}

		open.value = false;
		emit('habitRefresh');
	} catch (error) {
		console.error(error);
	}
}

const open = ref(false);

const emit = defineEmits(['habitRefresh']);
</script>

<style lang="scss">
.dh {

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
		width: 85vw;
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

	&__button {
		margin-top: rem(20px);
		display: flex;
		justify-content: flex-end;
	}

	&__close {
		position: absolute;
		top: rem(20px);
		right: rem(20px);
	}
	
}
</style>
