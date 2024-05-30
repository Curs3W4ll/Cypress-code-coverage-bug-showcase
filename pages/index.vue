<script setup lang="ts">
const count = ref(0);

const increment = () => {
  count.value = add(count.value, 1);
}
</script>

<template>
  <div>
    <h1>Hello</h1>
    <p data-test="count-display">
      Having {{ count }}
      <button data-test="count-incrementer" @click="increment">One more</button>
    </p>
  </div>
</template>
