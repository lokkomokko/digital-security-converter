<template>
  <v-header />
  <main>
    <slot />
  </main>
  <v-footer />
</template>

<script>
import VHeader from "@/components/layout/Header/vHeader";
import VFooter from "@/components/layout/Footer/vFooter";

export default {
  name: "v-body",
  components: {
    VHeader,
    VFooter,
  },
};
</script>

<style scoped>
main {
  flex: 1;
  padding: 80px 40px;
}
</style>
