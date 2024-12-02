<template>
  <form action="" method="post" @submit.prevent="console.log(account)" class="form">
    <fieldset class="form__fieldset">
      <MyInput
        size="full"
        label="Email"
        type="email"
        placeholder="Enter your email"
        v-model="account.email"
      />
      <MyInput
        size="full"
        label="Password"
        type="password"
        placeholder="Enter your password"
        v-model="account.password"
      />
      <MyInput
        v-if="type === 'signup'"
        size="full"
        label="Confirm password"
        type="password"
        placeholder="Enter same password"
        v-model="account.confirmPassword"
      />
    </fieldset>

    <MyButton label="Submit" type="submit" variant="primary" size="full" class="form__button" />
  </form>
</template>

<style lang="scss">
.form {
  $self: &;
  @include flex-column(40px);

  &__fieldset {
    @include flex-column(20px);
    margin: 0;
    padding: 0;
    border: none;
  }
}
</style>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

import MyButton from '../MyButton.vue'
import MyInput from '../MyInput.vue'

defineProps<{
  type: string
}>()

const account = ref({
  email: '',
  password: '',
  confirmPassword: '',
})
</script>
