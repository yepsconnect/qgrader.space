<script setup lang="ts">
useHead({ title: "Регистрация" });
definePageMeta({ middleware: "unauth" });

const user = reactive({
  email: "",
  password: "",
});

const { register } = useRegisterMutation();
</script>

<template>
  <Container class="min-h-dvh w-full flex items-center justify-center py-2">
    <form
      class="flex flex-col gap-2 w-full max-w-md"
      @submit.prevent="register(user)"
    >
      <h1>Регистрация</h1>
      <input
        v-model="user.email"
        type="email"
        name="email"
        required
        autocomplte="email"
        class="input input-bordered w-full"
        placeholder="example@mail.ru"
      />
      <input
        v-model="user.password"
        type="password"
        name="password"
        required
        autocomplete="current-password"
        class="input input-bordered w-full"
        placeholder="******"
      />
      <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
      <NuxtLink
        :to="{ name: 'login' }"
        type="button"
        class="btn btn-primary btn-outline"
      >
        У меня есть аккаунт
      </NuxtLink>
    </form>
  </Container>
</template>
