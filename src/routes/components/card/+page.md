# Card

The Card component provides a flexible container for grouping related content and actions.

## Import

```svelte
<script>
  import { Card } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>
```

## With Header and Footer

```svelte
<Card>
  <div slot="header">
    <h3>Product Details</h3>
  </div>

  <p>Product description and information.</p>

  <div slot="footer">
    <Button>Add to Cart</Button>
  </div>
</Card>
```

## Elevated Card

```svelte
<Card elevated>
  <p>This card has elevation shadow.</p>
</Card>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `elevated` | `boolean` | `false` | Add elevation shadow |
| `clickable` | `boolean` | `false` | Make the card clickable |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Main card content |
| `header` | Card header content |
| `footer` | Card footer content |

## Events

| Event | Description |
|-------|-------------|
| `on:click` | Fired when clickable card is clicked |