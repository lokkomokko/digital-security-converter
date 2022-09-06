<template>
  <v-body>
    <TextContent>
      Since 1995, the DS Currency Converter has provided free mid-market
      exchange rates for millions of users. Our latest currency calculator is a
      direct descendent of the fast and reliable original "DS Universal Currency
      Calculator" and of course it's still free! Learn more about Xe, our latest
      money transfer services, and how we became known as the world's currency
      data authority.
    </TextContent>
  </v-body>
</template>

<script>
import VBody from "@/components/layout/Body/vBody";
import TextContent from "@/components/common/static/TextContent/TextContent";

export default {
  name: "AboutView",
  components: { VBody, TextContent },
};
</script>
