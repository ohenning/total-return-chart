<script lang="ts">
export default {
  props: ["priceData", "dividendsData", "stockName"],
  methods: {
    getOptions() {
      return {
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          labels: {
            formatter: (value) => `${(value - 1) * 100}%`,
          },
          forceNiceScale: true,
        },
        stroke: {
          curve: "straight",
          width: 2,
        },
      };
    },
    getSeries() {
      interface SeriesDataPoint {
        x: string;
        y: number;
      }
      const stockChart: SeriesDataPoint[] = [];
      const stockChartWithDividends: SeriesDataPoint[] = [];

      for (let i = 0; i < this.priceData.length; i++) {
        this.priceData[i].percentageChangeToPrev =
          this.priceData[i].Close / this.priceData[i - 1]?.Close || 1;
      }
      const fullData = this.priceData
        .concat(this.dividendsData)
        .sort((a, b) => Date.parse(a.Date) - Date.parse(b.Date));
      let valueWithDividends = 1,
        value = 1,
        pricePerStock = this.priceData[0].Close;
      fullData.forEach((e) => {
        if (e.Dividends) {
          valueWithDividends +=
            e.Dividends * (valueWithDividends / pricePerStock);
        } else {
          pricePerStock = e.Close;
          value *= e.percentageChangeToPrev;
          valueWithDividends *= e.percentageChangeToPrev;
          stockChart.push({ x: e.Date, y: value });
          stockChartWithDividends.push({ x: e.Date, y: valueWithDividends });
        }
      });
      return [
        {
          name: "Capital Gain " + this.stockName,
          data: stockChart,
        },
        {
          name: "Total Return " + this.stockName,
          data: stockChartWithDividends,
        },
      ];
    },
  },
};
</script>

<template>
  <apexchart
    width="1200"
    type="line"
    :options="getOptions()"
    :series="getSeries()"
  ></apexchart>
</template>
