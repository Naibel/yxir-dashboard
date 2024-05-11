import { ColumnDef } from "@/types/types";

export const columnsData: ColumnDef[] = [
  {
    header: "Id",
    accessorKey: "id",
    footer: "Id",
  },
  {
    header: "Nom du produit",
    accessorKey: "product_name",
    footer: "Nom du produit",
  },
  {
    header: "Quantité",
    accessorKey: "quantity",
    footer: "Quantité",
  },
  {
    header: "Date de fabrication",
    accessorKey: "manufacturing_date",
    footer: "Date de fabrication",
  },
  {
    header: "Date d'expiration",
    accessorKey: "expiration_date",
    footer: "Date d'expiration",
  },
  {
    header: "Fabricant",
    accessorKey: "manufacturer",
    footer: "Fabricant",
  },
  {
    header: "Numéro de lot",
    accessorKey: "batch_number",
    footer: "Numéro de lot",
  },
  {
    header: "Température de stockage",
    accessorKey: "storage_temperature",
    footer: "Température de stockage",
    cell: ({ cell, row }: { cell: any; row: any }) => {
      return <div>{row.original.storage_temperature}°C</div>;
    },
  },
  {
    header: "Lieu de stockage",
    accessorKey: "location",
    footer: "Lieu de stockage",
  },
  {
    header: "Fournisseur",
    accessorKey: "supplier",
    footer: "Fournisseur",
  },
  {
    header: "Prix",
    accessorKey: "price",
    footer: "Prix",
    cell: (props: any) => {
      return <div>{props.row.original.price} €</div>;
    },
  },
];
