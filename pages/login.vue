<script setup lang="ts">
useHead({ title: "Авторизация" });
definePageMeta({ middleware: "unauth" });

const user = reactive({
  email: "",
  password: "",
});

const { login } = useLoginMutation();
</script>

<template>
  <div class="min-h-dvh w-full flex items-center justify-center p-2">
    <form
      class="flex flex-col gap-2 w-full max-w-md"
      @submit.prevent="login(user)"
    >
      <h1>Авторизация</h1>
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
      <button type="submit" class="btn btn-primary">Войти</button>
      <NuxtLink :to="{ name: 'register' }" class="btn btn-primary btn-outline">
        У меня нет аккаунта
      </NuxtLink>
    </form>
  </div>
</template>
