export type Asset = {
    id: number;
    name: string;
    description: string;
    date?: string;
    chartData?: any;
    modalData?: any;
    hashtags?:any;
};

export type Datum = {
  x: number;
  y: number;
};

export type Series = {
  name: string;
  data: Datum[];
};

export type LayoutChartProps = {
  data: Series[];
  options?: Highcharts.Options;
};

export type ChartData = {
  title: string;
  chartType: "pie" | "donut" | "bar" | "column" | "area";
  category: string;
  value: number;
};

export type ChartProps = {
  data: ChartData[];
};

export type KpiData = {
  title: string;
  value: any;
  hashtags: any;
};

export type KpiProps = {
  data: KpiData[];
}

