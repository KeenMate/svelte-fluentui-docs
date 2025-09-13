# DataGrid

The DataGrid component displays data in a tabular format with features like sorting, filtering, and selection.

## Import

```svelte
<script>
  import { DataGrid, DataGridRow, DataGridCell } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<DataGrid>
  <DataGridRow>
    <DataGridCell>Name</DataGridCell>
    <DataGridCell>Age</DataGridCell>
    <DataGridCell>City</DataGridCell>
  </DataGridRow>
  <DataGridRow>
    <DataGridCell>John Doe</DataGridCell>
    <DataGridCell>30</DataGridCell>
    <DataGridCell>New York</DataGridCell>
  </DataGridRow>
</DataGrid>
```

## With Column Headers

```svelte
<DataGrid>
  <DataGridRow header>
    <DataGridCell>Product</DataGridCell>
    <DataGridCell>Price</DataGridCell>
    <DataGridCell>Stock</DataGridCell>
  </DataGridRow>
  <!-- Data rows... -->
</DataGrid>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `selectable` | `boolean` | `false` | Enable row selection |
| `sortable` | `boolean` | `false` | Enable column sorting |
| `filterable` | `boolean` | `false` | Enable filtering |

## Events

| Event | Description |
|-------|-------------|
| `on:rowselect` | Fired when a row is selected |
| `on:sort` | Fired when column sorting changes |