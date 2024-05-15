export type Cols = {
  lg: number;
  md: number;
  sm: number;
  xs: number;
  xxs: number;
};

export type Item = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW: number;
  minH: number;
  type: WidgetType;
};

export type LayoutType = {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
};

export type WidgetType = "donut" | "bar" | "line" | "table";

export type ColumnDef = {
  header: string;
  accessorKey: string;
  footer: string;
  cell?: (props: any) => ReactNode;
};

export type DataDef = {
  id: number;
  product_name: string;
  quantity: number;
  manufacturing_date: string;
  expiration_date: string;
  manufacturer: string;
  batch_number: number;
  storage_temperature: number;
  location: string;
  supplier: string;
  price: number;
};
