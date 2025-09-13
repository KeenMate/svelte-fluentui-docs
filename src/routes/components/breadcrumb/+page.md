# Breadcrumb

The Breadcrumb component shows the user's current location within the application hierarchy.

## Import

```svelte
<script>
  import { Breadcrumb, BreadcrumbItem } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem>Electronics</BreadcrumbItem>
</Breadcrumb>
```

## With Custom Separator

```svelte
<Breadcrumb separator=">">
  <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
  <BreadcrumbItem href="/settings">Settings</BreadcrumbItem>
  <BreadcrumbItem>Profile</BreadcrumbItem>
</Breadcrumb>
```

## Properties

### Breadcrumb

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `separator` | `string` | `'/'` | Separator between items |

### BreadcrumbItem

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `href` | `string` | `undefined` | Link URL (makes item clickable) |
| `current` | `boolean` | `false` | Whether this is the current page |

## Events

| Event | Description |
|-------|-------------|
| `on:click` | Fired when a breadcrumb item is clicked |