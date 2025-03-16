<script setup lang="ts">
const { t } = useI18n();

useHead({ title: "Новая запись" });
definePageMeta({ middleware: "auth" });

const note = reactive<Note>({
  name: "",
  comment: "",
  date: new Date().toISOString().slice(0, 10),
  fragrance: 6,
  flavor: 6,
  aftertaste: 6,
  acidity: 6,
  body: 6,
  uniformity: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  },
  cleanCup: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  },
  sweetness: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  },
  balance: 6,
  overall: 6,
  taint: 0,
  fault: 0,
});

const attributes = ref([
  { key: "fragrance", min: 6, max: 10, step: 0.25 },
  { key: "flavor", min: 6, max: 10, step: 0.25 },
  { key: "aftertaste", min: 6, max: 10, step: 0.25 },
  { key: "acidity", min: 6, max: 10, step: 0.25 },
  { key: "body", min: 6, max: 10, step: 0.25 },
  { key: "balance", min: 6, max: 10, step: 0.25 },
  { key: "overall", min: 6, max: 10, step: 0.25 },
]);

const checkboxes = ref([
  { key: "uniformity" },
  { key: "cleanCup" },
  { key: "sweetness" },
]);

const calculateBonus = (checkbox: object) =>
  Object.values(checkbox).filter(Boolean).length;

const score = computed(() => {
  const baseScore =
    note.fragrance +
    note.flavor +
    note.aftertaste +
    note.acidity +
    note.body +
    note.balance +
    note.overall;

  const penalty = note.taint * 2 + note.fault * 2;

  const uniformityBonus = calculateBonus(note.uniformity) * 2;
  const cleanCupBonus = calculateBonus(note.cleanCup) * 2;
  const sweetnessBonus = calculateBonus(note.sweetness) * 2;

  const bonus = uniformityBonus + cleanCupBonus + sweetnessBonus;

  return (baseScore - penalty + bonus).toFixed(2);
});

const { addNote } = useAddNoteMutation();
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">{{ t(`page.cupping.title`) }}</h1>
    <form class="space-y-4" @submit.prevent="addNote({ score, ...note })">
      <div class="grid md:grid-cols-2 gap-4">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">
            {{ t(`label.date`) }}
          </legend>
          <input
            v-model="note.date"
            type="date"
            class="input input-bordered w-full"
          />
        </fieldset>
        <fieldset class="fieldset">
          <legend class="fieldset-legend">
            {{ t(`label.name`) }}
          </legend>
          <input
            v-model="note.name"
            type="text"
            class="input input-bordered w-full"
          />
        </fieldset>
      </div>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          {{ t(`label.comment`) }}
        </legend>
        <textarea
          v-model="note.comment"
          class="textarea textarea-bordered w-full"
        />
      </fieldset>

      <div class="grid md:grid-cols-2 gap-4">
        <fieldset
          v-for="attribute in attributes"
          :key="attribute.key"
          class="fieldset"
        >
          <div class="flex justify-between items-center">
            <legend class="fieldset-legend">
              {{ t(`label.${attribute.key}`) }}
            </legend>
            <p>{{ note[attribute.key] }}</p>
          </div>

          <input
            v-model.number="note[attribute.key]"
            type="range"
            :min="attribute.min"
            :max="attribute.max"
            :step="attribute.step"
            class="range w-full"
          />
          <p class="fieldset-label">
            {{ t(`description.${attribute.key}`) }}
          </p>
        </fieldset>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <fieldset v-for="box in checkboxes" :key="box.key" class="fieldset">
          <legend class="fieldset-legend">
            {{ t(`label.${box.key}`) }}
          </legend>
          <div class="flex gap-2">
            <label v-for="i in 5" class="flex items-center space-x-2">
              <input
                v-model="note[box.key][i]"
                type="checkbox"
                class="checkbox checkbox-primary"
              />
              <span>{{ i }}</span>
            </label>
          </div>
          <p class="fieldset-label">
            Номер соответствует чашке. За каждую чашку +2 к общему баллу
          </p>
        </fieldset>
      </div>

      <!-- Defects -->
      <div class="grid md:grid-cols-2 gap-4">
        <fieldset class="fieldset">
          <div class="flex justify-between">
            <legend class="fieldset-legend">
              {{ t(`label.taint`) }}
            </legend>
            <p>{{ note.taint }}</p>
          </div>
          <input
            v-model.number="note.taint"
            type="range"
            :min="0"
            :max="10"
            :step="1"
            class="range w-full"
          />
          <p class="fieldset-label">
            {{ t(`description.taint`) }}
          </p>
        </fieldset>
        <fieldset class="fieldset">
          <div class="flex justify-between">
            <legend class="fieldset-legend">
              {{ t(`label.fault`) }}
            </legend>
            <p>{{ note.fault }}</p>
          </div>
          <input
            v-model.number="note.fault"
            type="range"
            :min="0"
            :max="10"
            :step="1"
            class="range w-full"
          />
          <p class="fieldset-label">
            {{ t(`description.fault`) }}
          </p>
        </fieldset>
      </div>

      <!-- Final Score -->
      <div
        role="alert"
        class="alert alert-secondary alert-soft flex justify-center"
      >
        <span class="text-center text-lg">
          {{ t(`label.score`) }}<br />
          <label class="font-semibold">{{ score }}</label>
        </span>
      </div>
      <div class="sticky bottom-2">
        <button type="submit" class="btn btn-neutral w-full">
          {{ t(`page.cupping.submit`) }}
        </button>
      </div>
    </form>
  </div>
</template>
