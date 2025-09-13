# Button

The Button component provides users with the ability to trigger actions and make choices with a single tap.

## Import

```svelte
<script>
  import { Button } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { Button } from 'svelte-fluentui';

  let clickCount = 0;

  function handleClick() {
    clickCount++;
  }
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <Button on:click={handleClick}>Click me ({clickCount})</Button>

  <Button variant="primary" style="margin-left: 10px;">Primary Button</Button>

  <Button disabled style="margin-left: 10px;">Disabled Button</Button>
</div>

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