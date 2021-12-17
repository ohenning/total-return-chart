<script setup lang="ts">
import ChartData from "../public/XOMPrice.json";
import DividendData from "../public/XOMDividend.json";
import { transformApexSeries } from "../transformers/apex-series.transformer";
import { Price } from "~~/types/price";
import { Dividends } from "~~/types/dividends";
const StockName = "Exxon";
const series = transformApexSeries(
  ChartData as unknown as Price[],
  DividendData as unknown as Dividends[],
  StockName
);
</script>

<template>
  <div class="centered">
    <div>
      <div class="centered">
        <h2>Exxon Total Return Chart</h2>
      </div>
      <div v-if="series">
        <ClientOnly>
          <Chart :data="series" />
        </ClientOnly>
      </div>
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
