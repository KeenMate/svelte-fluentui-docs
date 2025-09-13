# Badge

The Badge component displays small status indicators, counts, or labels.

## Import

```svelte
<script>
  import { Badge } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Badge>New</Badge>
```

## Color Variants

```svelte
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
```

## Number Badge

```svelte
<Badge>{unreadCount}</Badge>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Badge color variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Badge size |

## Events

| Event | Description |
|-------|-------------|
| `on:click` | Fired when the badge is clicked |