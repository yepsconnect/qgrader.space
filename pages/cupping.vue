<script setup lang="ts">
const { t } = useI18n();

useHead({ title: t("page.cupping.title") });
definePageMeta({ middleware: "auth" });

const { notes } = useNotesQuery();
const { deleteNote } = useDeleteNoteMutation();
</script>

<template>
  <Container class="py-2 flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">
        {{ t("page.cupping.title") }}
      </h1>
      <NuxtLink :to="{ name: 'add' }" class="btn btn-primary">
        {{ t("label.add") }}
      </NuxtLink>
    </div>
    <div class="flex flex-col gap-2">
      <div v-for="note in notes" :key="note._id" class="p-3 shadow rounded">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-xl font-semibold">{{ note.name }}</h3>
            <p class="text-xs">{{ note.date }}</p>
          </div>
          <div class="avatar avatar-placeholder">
            <div class="bg-neutral text-neutral-content w-8 rounded-full">
              <span class="text-xs">
                {{ note.score && Math.ceil(note.score) }}+
              </span>
            </div>
          </div>
        </div>
        <p>{{ note.comment }}</p>
        <div class="flex justify-end">
          <button class="btn btn-sm btn-error" @click="deleteNote(note._id!)">
            Удалить
          </button>
        </div>
      </div>
    </div>
    <div v-if="!notes?.length" class="flex items-center justify-center py-6">
      <p>{{ t("page.cupping.empty") }}</p>
    </div>
  </Container>
</template>
