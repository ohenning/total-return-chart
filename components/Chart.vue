<script lang="ts">
export default {
  props: ["data"],
  methods: {
    // getOptions returns apex charts options property
    getOptions() {
      return {
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          labels: {
            formatter: (value) => `${((value - 1) * 100).toFixed(0)}%`,
          },
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
      };
    },
  },
};
</script>

<template>
  <apexchart
    width="1200"
    type="line"
    :options="getOptions()"
    :series="data"
  ></apexchart>
</template>
