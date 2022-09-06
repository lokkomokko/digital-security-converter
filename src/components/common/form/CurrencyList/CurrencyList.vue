<template>
  <select @change="changeHandler" :value="currency">
    <option value="">...</option>
    <option
      v-for="(currencyItem, index) in currencyList"
      :key="index"
      :value="currencyItem"
    >
      {{ currencyItem }}
    </option>
  </select>
</template>

<script>
import currencyListJson from "@/helpers/currency-list.json";
export default {
  name: "CurrencyList",
  props: ["currency"],
  data() {
    return {
      currencyList: currencyListJson.list,
    };
  },
  methods: {
    changeHandler(e) {
      this.$emit("update:currency", e.target.value);
      this.$emit("convertCurrency");
    },
  },
};
</script>

<style scoped>
select {
  border-radius: 5px;
  text-align: center;
}
</style>
