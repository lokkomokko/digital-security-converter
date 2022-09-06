<template>
  <div class="input-wrapper">
    <input
      type="number"
      :placeholder="placeholder"
      v-if="initialCurrency"
      @input.prevent="changeHandler"
      :value="amount"
    />
    <CurrencyList
      class="input-wrapper__list"
      v-model:currency="currency"
      @convertCurrency="$emit('convertCurrency')"
    />
  </div>
</template>

<script>
import CurrencyList from "@/components/common/form/CurrencyList/CurrencyList";

export default {
  name: "CurrencyFormInput",
  props: ["placeholder", "initialCurrency", "amount"],
  data() {
    return {
      currency: null,
    };
  },
  created() {
    if (this.initialCurrency) this.currency = this.initialCurrency;
  },
  methods: {
    changeHandler(e) {
      let value = e.target.value;
      if (isNaN(parseInt(value)) || value < 0) {
        value = 0;
      }
      this.$emit("update:amount", value);
      if (value > 0) {
        this.$emit("convertCurrency");
      }
    },
  },
  components: {
    CurrencyList,
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  gap: 5px;
}
input {
  flex: 1;
  padding: 0.3em 1em;
  border-radius: 6px;
  border: none;
  font-family: var(--font);
}
input::placeholder {
  text-transform: uppercase;
}
</style>
