export type Asset = {
    id: number;
    name: string;
    description: string;
    date?: string;
    chartData?: any;
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
