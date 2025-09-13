# Paginator

The Paginator component provides navigation controls for paginated content.

## Import

```svelte
<script>
  import { Paginator } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Paginator
  totalPages={10}
  currentPage={1}
  on:pagechange={(e) => handlePageChange(e.detail)}
/>
```

## With Page Size Options

```svelte
<Paginator
  totalItems={250}
  pageSize={10}
  pageSizeOptions={[10, 25, 50]}
  showPageSizeSelector
/>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `currentPage` | `number` | `1` | Current active page |
| `totalPages` | `number` | `undefined` | Total number of pages |
| `totalItems` | `number` | `undefined` | Total number of items |
| `pageSize` | `number` | `10` | Items per page |
| `pageSizeOptions` | `number[]` | `[10, 25, 50]` | Page size options |
| `showPageSizeSelector` | `boolean` | `false` | Show page size selector |

## Events

| Event | Description |
|-------|-------------|
| `on:pagechange` | Fired when page changes |
| `on:pagesizechange` | Fired when page size changes |