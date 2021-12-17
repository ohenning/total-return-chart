<script setup>
import ChartData from "../public/APPLPrice.json";
import DividendData from "../public/APPLDividend.json";
</script>

<template>
  <div class="centered">
    <div>
      <div class="centered">
        <h2>Apple Total Return Chart</h2>
      </div>

      <ClientOnly>
        <Chart
          :priceData="ChartData"
          :dividendsData="DividendData"
          stockName="Apple"
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
