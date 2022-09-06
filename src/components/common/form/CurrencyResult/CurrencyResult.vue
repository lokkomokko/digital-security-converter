<template>
  <div class="wrapper">
    <CurrencyResultPreloader v-if="loading" />
    <p v-else><slot></slot></p>
  </div>
</template>

<script>
import CurrencyResultPreloader from "@/components/common/form/CurrencyResult/CurrencyResultPreloader/CurrencyResultPreloader";

export default {
  name: "CurrencyResult",
  props: ["loading"],
  components: {
    CurrencyResultPreloader,
  },
};
</script>

<style scoped>
.wrapper {
  padding: 1em;
  background: #fff;
  text-align: center;
  min-height: 1em;
}
p {
  color: #000;
}
</style>
