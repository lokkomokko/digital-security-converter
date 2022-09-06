<template>
  <v-body>
    <CurrencyForm class="form" />
  </v-body>
</template>

<script>
import VBody from "@/components/layout/Body/vBody";
import CurrencyForm from "@/components/common/form/CurrencyForm/CurrencyForm";

export default {
  name: "HomeView",
  components: { VBody, CurrencyForm },
};
</script>

<style>
.form {
}
</style>
