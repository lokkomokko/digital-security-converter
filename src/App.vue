<template>
  <router-view />
</template>

<script>
export default {
  created() {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();
  },
};
</script>

<style lang="scss" src="./assets/css/normalize.scss" />

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap");

:root {
  --font: "Play";
  --app-height: 100vh;
  --bg-color: #000000de;
  --bg-color-2: #1b98e0;
}

html {
  min-height: 100%;
}

body {
  font-family: var(--font);
  color: #fff;
  background: var(--bg-color);
  font-size: 16px;
  min-width: 1200px;
}

#app {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: var(--app-height);
}
</style>
