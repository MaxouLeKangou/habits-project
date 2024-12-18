<template>
	<main class="auth">
		<form method="post" class="auth__form" @submit.prevent="onSubmit()">
			<fieldset class="auth__fieldset">
				<MyInput v-model="account.username" placeholder="Nom d'utilisateur" type="username" label="Username" size="full" class="auth__input" />
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
	username: '',
	password: '',
	confirmPassword: ''
});

async function onSubmit() {
	try {
		if (account.password !== account.confirmPassword) {
			alert("Les mots de passe ne correspondent pas.");
			return;
		}

		const response = await fetch('http://localhost:4000/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: account.username,
				password: account.password,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			const cookieJwt =  useCookie('api_tracking_jwt');
			cookieJwt.value = data.token;
			
			navigateTo('/dashboard');
		} else {
			const errorData = await response.json();
			console.error('Erreur lors de l’inscription :', errorData);
			alert(`Erreur : ${errorData.message || 'Un problème est survenu.'}`);
		}
	} catch (error) {
		console.error('Erreur réseau ou serveur :', error);
		alert('Impossible de se connecter au serveur.');
	}
}
</script>