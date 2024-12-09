<template>
	<main class="signin">
		<form method="post" class="signin__form" @submit.prevent="">
			<fieldset class="signin__fieldset">
				<MyInput v-model="account.email" placeholder="Adresse e-mail" type="email" label="Email" size="full" class="signin__input" />
				<MyInput v-model="account.password" placeholder="Mot de passe" type="password" label="Password" size="full" class="signin__input" />
				<nuxt-link to="" class="signin__link -end">Mot de passe oublié ?</nuxt-link>
			</fieldset>
			<div class="signin__submit">
				<p class="signin__terms">En continuant, vous acceptez nos <NuxtLink to="" class="signin__link -end">Conditions d'utilisations</NuxtLink> ainsi que notre <NuxtLink to="" class="signin__link">Charte de confidentialité</NuxtLink> !</p>
				<MyButton type="submit" label="Se connecter" size="full" class="signin__button" />
				<nuxt-link to="/auth/signup" class="signin__link -center">Vous n'avez pas de compte ?</nuxt-link>
			</div>
		</form>
	</main>
</template>

<script setup lang="ts">
const account = reactive({
	email: '',
	password: ''
});
</script>

<style lang="scss">
$spacing-lg: rem(40px);
$spacing-md: rem(20px);
$spacing-sm: rem(10px);

$font-size-title: rem(24px);

.signin {

	&__title {
		font-size: $font-size-title;
		font-weight: 600;
		text-align: center;

		span {
			color: $primary-base;
		}
	}

	&__form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 100vh;
		gap: $spacing-md;

		&__content {
			display: flex;
			flex-direction: column;
			gap: $spacing-md;
		}
	}

	&__fieldset {
		display: flex;
		flex-direction: column;
		gap: $spacing-sm;
		margin-top: $spacing-lg;
	}

	&__terms {
		font-size: rem(12px);
	}

	&__link {
		color: $primary-base;
		font-size: rem(14px);

		&.-end {
			text-align: end;
		}
		&.-center {
			text-align: center;
		}
	}

	&__submit {
		display: flex;
		flex-direction: column;
		justify-content: end;

		.signin__link {
			margin: $spacing-lg 0;
		}
	}
}
</style>