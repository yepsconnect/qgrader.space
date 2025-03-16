<script setup lang="ts">
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
    <button class="btn btn-error" @click="handleLogout">Выйти</button>
  </Container>
</template>
