<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style scoped>
nav {
  margin-left: auto;
}
ul {
  display: flex;
  gap: 10px;
  font-size: 20px;
}
.router-link-active {
  border-bottom: 1px solid;
}
</style>
