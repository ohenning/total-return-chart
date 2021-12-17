import { Dividends } from "~~/types/dividends";
import { Price } from "~~/types/price";

interface SeriesDataPoint {
  x: string;
  y: number;
}

// transformApexSeries turns the service internal representation of price and dividends data into an ApexAxisChartSeries array.
// I actually don't yet know where exactly this logic belongs to "the nuxt js way". For now, it was just important to me to have
// control over which entity (client or server) executes this code. As with large data input, the cpu and memory usage to
// calculate compund values can become quite large too (even though this is an O(n) complexity algorithm).
export function transformApexSeries(
  priceData: Price[],
  dividendsData: Dividends[],
  stockName: string
): ApexAxisChartSeries {
  const stockChart: SeriesDataPoint[] = [];
  const stockChartWithDividends: SeriesDataPoint[] = [];
  // Calculate growth rate relative to previous node
  for (let i = 0; i < priceData.length; i++) {
    priceData[i].percentageChangeToPrev =
      priceData[i].Close / priceData[i - 1]?.Close || 1;
  }

  // Prepare stock price and dividends data in order to calculate total return
  const fullData: any[] = priceData
    .concat(dividendsData as unknown as any)
    .sort((a, b) => Date.parse(a.Date) - Date.parse(b.Date));

  // Define dynamic data
  let valueWithDividends = 1,
    value = 1,
    pricePerStock = priceData[0].Close;

  // Calculate stock price and total return growth
  fullData.forEach((e) => {
    if (e.Dividends) {
      valueWithDividends += e.Dividends * (valueWithDividends / pricePerStock);
    } else {
      pricePerStock = e.Close;
      value *= e.percentageChangeToPrev;
      valueWithDividends *= e.percentageChangeToPrev;
      // Push to apex charts data models
      stockChart.push({ x: e.Date, y: value });
      stockChartWithDividends.push({ x: e.Date, y: valueWithDividends });
    }
  });
  return [
    {
      name: "Capital Gain " + stockName,
      data: stockChart,
    },
    {
      name: "Total Return " + stockName,
      data: stockChartWithDividends,
    },
  ];
}
