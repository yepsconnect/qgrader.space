<script setup lang="ts">
const { t } = useI18n();

useHead({ title: t("page.home.title") });
</script>

<template>
  <Container class="min-h-dvh flex items-center justify-center w-full py-2">
    <h1 class="w-full text-center text-[10vw] font-bold">
      {{ t("page.home.title") }}
    </h1>
  </Container>
</template>
