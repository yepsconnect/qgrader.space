<script setup lang="ts">
const { t } = useI18n();

useHead({ title: t("page.register.title") });
definePageMeta({ middleware: "unauth" });

const user = reactive({
  email: "",
  password: "",
});

const { register, isLoading } = useRegisterMutation();
</script>

<template>
  <Container class="min-h-dvh w-full flex items-center justify-center py-2">
    <form
      class="flex flex-col gap-2 w-full max-w-md"
      @submit.prevent="register(user)"
    >
      <h1>
        {{ t("page.register.title") }}
      </h1>
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
          {{ t("page.register.submit") }}
        </template>
      </button>
      <NuxtLink
        :to="{ name: 'login' }"
        type="button"
        class="btn btn-primary btn-outline"
      >
        {{ t("page.register.reset") }}
      </NuxtLink>
    </form>
  </Container>
</template>
