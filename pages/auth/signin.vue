<template>
	<main class="auth">
		<form method="post" class="auth__form" @submit.prevent="onSubmit">
			<fieldset class="auth__fieldset">
				<Input v-model="account.username" placeholder="Nom d'utilisateur" type="username" label="Username" full class="auth__input" />
				<Input v-model="account.password" placeholder="Mot de passe" type="password" label="Password" full class="auth__input" />
				<nuxt-link to="" class="auth__link -end">Mot de passe oublié ?</nuxt-link>
			</fieldset>
			<div class="auth__submit">
				<p class="auth__terms">En continuant, vous acceptez nos <NuxtLink to="" class="auth__link -end">Conditions d'utilisations</NuxtLink> ainsi que notre <NuxtLink to="" class="auth__link">Charte de confidentialité</NuxtLink> !</p>
				<Button type="submit" label="Se connecter" full class="auth__button" />
				<nuxt-link to="/auth/signup" class="auth__link -center">Vous n'avez pas de compte ?</nuxt-link>
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
	try {
		if (!account.username || !account.password) {
			alert("Tous les champs doivent être remplis.");
			return;
		}

		const response = await fetch('http://localhost:4000/auth/login', {
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
			console.error('Erreur de connexion :', errorData);
			alert(`Erreur : ${errorData.message || 'Identifiants incorrects.'}`);
		}
	} catch (error) {
		console.error('Erreur réseau ou serveur :', error);
		alert('Impossible de se connecter au serveur.');
	}
}
</script>