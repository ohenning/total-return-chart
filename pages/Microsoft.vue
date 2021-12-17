<script setup>
import ChartData from "../public/MSFTPrice.json";
import DividendData from "../public/MSFTDividend.json";
</script>

<template>
  <div class="centered">
    <div>
      <div class="centered">
        <h2>Microsoft Total Return Chart</h2>
      </div>
      <ClientOnly>
        <Chart
          :priceData="ChartData"
          :dividendsData="DividendData"
          stockName="Microsoft"
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
