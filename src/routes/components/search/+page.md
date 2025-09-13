# Search

The Search component provides a specialized input field for search functionality with optional search icon.

## Import

```svelte
<script>
  import { Search } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Search placeholder="Search..." />
```

## With Label

```svelte
<Search label="Search products" placeholder="Enter product name..." />
```

## With Search Handler

```svelte
<Search
  placeholder="Search users..."
  on:search={(e) => handleSearch(e.detail.value)}
/>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the search field |
| `value` | `string` | `''` | Current search value |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `disabled` | `boolean` | `false` | Whether the search is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:input` | Fired as user types |
| `on:search` | Fired when search is triggered |
| `on:clear` | Fired when search is cleared |