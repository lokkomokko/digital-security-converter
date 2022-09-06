<template>
  <div>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "TextContent",
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
p {
  max-width: 760px;
  line-height: 2.1;
}
</style>
