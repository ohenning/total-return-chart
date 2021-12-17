<script setup>
import ChartData from "../public/XOMPrice.json";
import DividendData from "../public/XOMDividend.json";
</script>

<template>
  <div class="centered">
    <div>
      <div class="centered">
        <h2>Exxon Total Return Chart</h2>
      </div>

      <ClientOnly>
        <Chart
          :priceData="ChartData"
          :dividendsData="DividendData"
          stockName="Exxon"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
.centered {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
