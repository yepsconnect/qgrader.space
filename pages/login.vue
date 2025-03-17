<script setup lang="ts">
const { t } = useI18n();

useHead({ title: t("page.login.title") });
definePageMeta({ middleware: "unauth" });

const user = reactive({
  email: "",
  password: "",
});

const { login, isLoading } = useLoginMutation();
</script>

<template>
  <Container class="min-h-dvh w-full flex items-center justify-center py-2">
    <form
      class="flex flex-col gap-2 w-full max-w-md"
      @submit.prevent="login(user)"
    >
      <h1>{{ t("page.login.title") }}</h1>
      <input
        v-model="user.email"
        type="email"
        name="email"
        required
        autocomplte="email"
        class="input input-lg input-bordered w-full"
        placeholder="example@mail.ru"
      />
      <input
        v-model="user.password"
        type="password"
        name="password"
        required
        autocomplete="current-password"
        class="input input-lg input-bordered w-full"
        placeholder="******"
      />
      <button type="submit" class="btn btn-primary" :disabled="isLoading">
        <span v-if="isLoading" class="loading"></span>
        <template v-else>
          {{ t("page.login.submit") }}
        </template>
      </button>
      <NuxtLink :to="{ name: 'register' }" class="btn btn-primary btn-outline">
        {{ t("page.login.reset") }}
      </NuxtLink>
    </form>
  </Container>
</template>
