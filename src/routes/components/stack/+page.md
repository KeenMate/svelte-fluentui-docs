# Stack

The Stack component arranges child elements in a vertical or horizontal stack with consistent spacing.

## Import

```svelte
<script>
  import { Stack } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Stack>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

## Horizontal Stack

```svelte
<Stack orientation="horizontal">
  <Button>First</Button>
  <Button>Second</Button>
  <Button>Third</Button>
</Stack>
```

## Custom Spacing

```svelte
<Stack spacing="large">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
</Stack>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Stack direction |
| `spacing` | `'small' \| 'medium' \| 'large'` | `'medium'` | Spacing between items |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Cross-axis alignment |
| `justify` | `'start' \| 'center' \| 'end' \| 'space-between'` | `'start'` | Main-axis justification |