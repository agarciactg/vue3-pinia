import { defineStore } from "pinia";
import { ref } from "vue";

export const users = defineStore("users", () => {
  const n = ref(0);

  console.log(n.value);
});
