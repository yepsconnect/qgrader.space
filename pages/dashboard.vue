<script setup lang="ts">
const { t } = useI18n();

useHead({ title: t("page.dashboard.title") });
definePageMeta({ middleware: "auth" });
</script>

<template>
  <Container class="py-2 flex flex-col gap-2">
    <h1 class="text-2xl font-semibold">
      {{ t("page.dashboard.title") }}
    </h1>
    <ul class="menu menu-lg w-full">
      <li>
        <NuxtLink :to="{ name: 'cupping' }">
          {{ t("page.cupping.title") }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'settings' }">
          {{ t("page.settings.title") }}
        </NuxtLink>
      </li>
    </ul>
  </Container>
</template>
