# Tooltip

The Tooltip component displays contextual information when hovering over or focusing on an element.

## Import

```svelte
<script>
  import { Tooltip } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Tooltip content="This is a helpful tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

## Different Positions

```svelte
<Tooltip content="Top tooltip" position="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" position="bottom">
  <Button>Bottom</Button>
</Tooltip>
```

## With Rich Content

```svelte
<Tooltip>
  <Button slot="trigger">Rich tooltip</Button>
  <div slot="content">
    <h4>Tooltip Title</h4>
    <p>More detailed information here.</p>
  </div>
</Tooltip>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `content` | `string` | `undefined` | Tooltip text content |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip position |
| `delay` | `number` | `500` | Show delay in milliseconds |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Element that triggers the tooltip |
| `trigger` | Alternative slot for trigger element |
| `content` | Rich content for the tooltip |