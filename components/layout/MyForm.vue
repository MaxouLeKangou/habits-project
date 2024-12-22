<!-- <template>
  <form action="" method="post" class="form" @submit.prevent="console.log(account)">
    <fieldset class="form__fieldset">
      <MyInput
        v-model="account.email"
        size="full"
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <MyInput
        v-model="account.password"
        size="full"
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <MyInput
        v-if="type === 'signup'"
        v-model="account.confirmPassword"
        size="full"
        label="Confirm password"
        type="password"
        placeholder="Enter same password"
      />
    </fieldset>

    <MyButton label="Submit" type="submit" variant="primary" size="full" class="form__button" />
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

import MyButton from '../MyButton.vue'
import MyInput from '../Input.vue'

defineProps<{
  type: string
}>()

const account = ref({
  email: '',
  password: '',
  confirmPassword: '',
})
</script>

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
</style> -->
