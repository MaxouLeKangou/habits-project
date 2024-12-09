<template>
	<main class="auth">
		<form method="post" class="auth__form" @submit.prevent="">
			<fieldset class="auth__fieldset">
				<MyInput v-model="account.email" placeholder="Adresse e-mail" type="email" label="Email" size="full" class="auth__input" />
				<MyInput v-model="account.password" placeholder="Mot de passe" type="password" label="Password" size="full" class="auth__input" />
				<MyInput v-model="account.confirmPassword" placeholder="Confirmation du mot de passe" type="password" label="Confirm Password" size="full" class="auth__input" />
			</fieldset>
			<div class="auth__submit">
				<p class="auth__terms">En continuant, vous acceptez nos <NuxtLink to="" class="auth__link -end">Conditions d'utilisations</NuxtLink> ainsi que notre <NuxtLink to="" class="auth__link">Charte de confidentialité</NuxtLink> !</p>
				<MyButton type="submit" label="Créer un compte" size="full" class="auth__button" />
				<nuxt-link to="/auth/signin" class="auth__link -center">Déjà un compte ?</nuxt-link>
			</div>
		</form>
	</main>
</template>

<script setup lang="ts">
const account = reactive({
	email: '',
	password: '',
	confirmPassword: ''
});
</script>