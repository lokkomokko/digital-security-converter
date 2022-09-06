<template>
  <div class="form">
    <div class="form__inputs-wrapper">
      <CurrencyInput
        placeholder="amount"
        class="form__input"
        :initialCurrency="initialBaseCurrency"
        v-model:amount="amount"
        ref="baseCurrencyInput"
        @convertCurrency="convertCurrency"
      />
      <span>to</span>
      <CurrencyInput
        placeholder="target"
        class="form__input"
        ref="targetCurrencyInput"
        @convertCurrency="convertCurrency"
      />
    </div>
    <div class="form__result">
      <CurrencyResult :loading="loading">{{ result || "..." }}</CurrencyResult>
    </div>
  </div>
</template>

<script>
import CurrencyInput from "@/components/common/form/CurrencyInput/CurrencyInput";
import CurrencyResult from "@/components/common/form/CurrencyResult/CurrencyResult";
import { getCurrencyRate, getLang } from "@/helpers/helpers";
import localeToCurrencyJson from "@/helpers/locale-to-cur-list.json";

export default {
  name: "CurrencyForm",
  data() {
    return {
      initialBaseCurrency: null,
      amount: 10,
      loading: false,
      result: null,
    };
  },
  created() {
    const locale = getLang();
    this.initialBaseCurrency = localeToCurrencyJson.list[locale];
  },
  mounted() {
    this.$refs["baseCurrencyInput"].$el.querySelector("input").focus();
  },
  methods: {
    convertCurrency() {
      const baseCurrency = this.$refs.baseCurrencyInput.currency;
      const targetCurrency = this.$refs.targetCurrencyInput.currency;
      this.result = null;
      if (baseCurrency && targetCurrency) {
        this.loading = true;
        getCurrencyRate(baseCurrency, targetCurrency, this.amount, (json) =>
          this.setConvertingResult(json)
        );
      }
    },
    setConvertingResult(json) {
      let amount = "???";
      if (json.rates && Object.keys(json.rates).length) {
        amount = json.rates[Object.keys(json.rates)[0]];
      }
      this.result = amount;
      this.loading = false;
    },
  },
  components: {
    CurrencyInput,
    CurrencyResult,
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  font-size: 55px;
  gap: 40px;
}
.form__inputs-wrapper {
  display: flex;
  gap: 40px;
}
span {
  align-self: center;
}
.form__input {
  flex: 1;
}
</style>
