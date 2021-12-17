<script setup>
import ChartDate from "../public/MSFTPrice.json";
import DividendDate from "../public/MSFTDividend.json";
</script>

<template>
  <div class="centered">
    <div>
      <div class="centered">
        <h2>Microsoft Total Return Chart</h2>
      </div>
      <ClientOnly>
        <Chart
          :priceData="ChartDate"
          :dividendsData="DividendDate"
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
