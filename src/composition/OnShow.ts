import { onMounted, Ref, ref } from "vue";

export default function useOnShow(): Ref<boolean> {
  const show: Ref<boolean> = ref(false);
  onMounted(() => {
    show.value = true;
  });
  return show;
}
