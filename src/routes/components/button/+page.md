# Button

The Button component provides users with the ability to trigger actions and make choices with a single tap.

## Import

```svelte
<script>
  import { Button } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Button>Click me</Button>
```

## Variants

### Primary Button
```svelte
<Button variant="primary">Primary Action</Button>
```

### Secondary Button
```svelte
<Button variant="secondary">Secondary Action</Button>
```

### Outline Button
```svelte
<Button variant="outline">Outline Button</Button>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'secondary'` | Button style variant |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |

## Events

| Event | Description |
|-------|-------------|
| `on:click` | Fired when the button is clicked |