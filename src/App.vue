<template>
  <div>
    {{ today }}
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: 'App',
  setup() {
    const today = inject("today");

    return { today };

  },
}
</script>