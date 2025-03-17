<script setup lang="ts">
const { t } = useI18n();

useHead({ title: t("page.settings.title") });
definePageMeta({ middleware: "auth" });

const handleLogout = () => {
  const isConfirm = confirm("Вы действительно хотите выйти?");

  if (isConfirm) {
    localStorage.removeItem("token");
    navigateTo({ name: "login" });
  }
};
</script>

<template>
  <Container class="p-2 flex flex-col gap-2 py-2">
    <h1>{{ t("page.settings.title") }}</h1>
    <button class="btn btn-error" @click="handleLogout">
      {{ t("label.logout") }}
    </button>
  </Container>
</template>
