<template>
  <p class="mt-2 text-lg font-bold">My Roles:</p>
  <div class="flex flex-row justify-center gap-x-4 mt-1">
    <p v-for="(role, index) in roles" :key="`role-${index}`">
      <font-awesome-icon
        class="text-gray-600 mr-1"
        :icon="['fas', role.icon]"
      />{{ role.text }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IRole } from "./models";

export default defineComponent({
  name: "Roles",
  props: {
    roles: {
      type: Object as () => IRole,
      required: true,
    },
  },
});
</script>
