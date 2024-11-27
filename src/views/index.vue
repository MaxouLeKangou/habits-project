<template>
  <div>
    <MyButton label="coucou" variant="primary" />
    <MyInput type="text" placeholder="Enter your name" :modelValue="inputValue" />
  </div>
</template>

<script setup lang="ts">
import MyButton from '../../components/MyButton.vue'
import MyInput from '../../components/MyInput.vue'

import { ref } from 'vue'

const inputValue = ref()
</script>
