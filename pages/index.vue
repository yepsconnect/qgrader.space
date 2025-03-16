<template>
  <Container class="py-2 flex flex-col gap-2">
    <h1>Меню</h1>
    <ul class="menu w-full">
      <li>
        <NuxtLink :to="{ name: 'cupping' }">Капинг</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'settings' }">Настройки</NuxtLink>
      </li>
    </ul>
  </Container>
</template>
