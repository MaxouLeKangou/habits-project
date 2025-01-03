<template>
	<main class="container auth">
		<h2 class="auth__title">Hey, Welcome</h2>
		<p class="auth__description">is the place you were supose to be if you want to track your habits!</p>
		<form method="post" class="auth__form" @submit.prevent="onSubmit()">
			<fieldset class="auth__fieldset">
				<Input v-model="account.username" placeholder="Nom d'utilisateur" type="username" label="Username" full class="auth__input" />
				<Input v-model="account.password" placeholder="Mot de passe" type="password" label="Password" full class="auth__input" />
				<Input v-model="account.confirmPassword" placeholder="Confirmation du mot de passe" type="password" label="Confirm Password" full class="auth__input" />
			</fieldset>
			<div class="auth__submit">
				<Button type="submit" label="Create account" full class="auth__button" />
				<nuxt-link to="/auth/signin" class="auth__link -center">You already have account?</nuxt-link>
			</div>
		</form>
	</main>
</template>

<script setup lang="ts">
const account = reactive({
	username: '',
	password: '',
	confirmPassword: ''
});

async function onSubmit() {
	try  {
		if (account.password !== account.confirmPassword) {
			alert("Les mots de passe ne correspondent pas.");
			return;
		}

		const response = await useAPI(`/auth/register`, {
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

		const cookieJwt = useCookie('api_tracking_jwt');
		cookieJwt.value = response.token;

		navigateTo('/dashboard');
	} catch (error) {
		console.error(error);
	}
}
</script>