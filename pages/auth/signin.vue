<template>
	<main class="container auth">
		<h2 class="auth__title">Welcome back</h2>
		<p class="auth__description">is the place you were supose to be if you want to track your habits!</p>
		<form method="post" class="auth__form" @submit.prevent="onSubmit">
			<div class="auth__fieldset">
				<Input v-model="account.username" placeholder="Username" type="username" label="Username" full class="auth__input" />
				<Input v-model="account.password" placeholder="Password" type="password" label="Password" full class="auth__input" />
				<NuxtLink to="" class="auth__link -end">forgot password?</NuxtLink>
			</div>
			<div class="auth__submit">
				<Button type="submit" label="Connection" full class="auth__button" />
				<NuxtLink to="/auth/signup" class="auth__link -center">You are new? Create account</NuxtLink>
			</div>
		</form>
	</main>
</template>

<script setup lang="ts">
const account = reactive({
	username: '',
	password: ''
});

async function onSubmit() {
	try  {
		const response = await useAPI(`/auth/login`, {
			method: "POST",
			body: {
				username: account.username,
				password: account.password,
			},
			auth: false,
		});

		if (response.error) {
			alert(`Error: ${response.message || "An error occurred"}`);
			return;
		}

		navigateTo('/dashboard');
	} catch (error) {
		console.error(error);
	}
}
</script>

<style lang="scss">
.auth {
	min-height: 100vh;

	&__title {
		font-size: rem(32px);
		font-weight: 700;
		margin-bottom: rem(10px);
		text-align: center;
	}

	&__description {
		color: $light-200;
		margin-bottom: rem(80px);
		text-align: center;
	}

	&__fieldset {
		display: flex;
		flex-direction: column;
		gap: rem(20px);
	}

	&__link {
		display: block;
		text-decoration: none;
		color: $light-200;
		width: 100%;

		&.-end {
			text-align: right;
		}

		&.-center {
			text-align: center;
		}
	}

	&__submit {
		display: flex;
		flex-direction: column;
		gap: rem(20px);
		margin-top: rem(60px);
	}

}
</style>