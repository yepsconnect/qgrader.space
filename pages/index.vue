<script setup lang="ts">
const { t } = useI18n();

useHead({ title: t("page.home.title") });
</script>

<template>
  <Container
    class="min-h-dvh flex flex-col gap-2 items-center justify-center w-full py-2"
  >
    <h1 class="block text-2xl w-full text-center">
      {{ t("page.home.title") }}
    </h1>
    <NuxtLink :to="{ name: 'dashboard' }" class="btn btn-primary">
      {{ t("label.start") }}
    </NuxtLink>
  </Container>
</template>
