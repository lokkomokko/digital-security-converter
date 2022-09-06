<template>
  <header>
    <a href="/" class="logo">D$ Currency Converter</a>
    <HeaderNav />
  </header>
</template>

<script>
import HeaderNav from "@/components/common/header/HeaderNav/HeaderNav";

export default {
  name: "v-header",
  components: {
    HeaderNav,
  },
};
</script>

<style scoped>
header {
  height: 60px;
  padding: 10px 40px;
  border-bottom: 1px solid;
  display: flex;
  align-items: center;
}
.logo {
  font-weight: bold;
  font-size: 44px;
}
</style>
