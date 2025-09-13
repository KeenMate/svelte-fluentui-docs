# Toast

The Toast component displays brief notification messages that appear temporarily and then disappear.

## Import

```svelte
<script>
  import { Toast } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Toast show={showToast} on:dismiss={() => showToast = false}>
  Operation completed successfully!
</Toast>
```

## Different Variants

```svelte
<Toast variant="success" show={showSuccess}>
  Success message
</Toast>

<Toast variant="warning" show={showWarning}>
  Warning message
</Toast>

<Toast variant="error" show={showError}>
  Error message
</Toast>
```

## With Action Button

```svelte
<Toast show={showToast}>
  Message sent successfully
  <Button slot="action" size="small">Undo</Button>
</Toast>
```

## Auto Dismiss

```svelte
<Toast show={showToast} duration={5000} autoDismiss>
  This will disappear after 5 seconds
</Toast>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `show` | `boolean` | `false` | Whether the toast is visible |
| `variant` | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | Toast type |
| `duration` | `number` | `4000` | Display duration in milliseconds |
| `autoDismiss` | `boolean` | `false` | Auto dismiss after duration |
| `position` | `'top' \| 'bottom'` | `'bottom'` | Toast position |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Toast message content |
| `action` | Action button |

## Events

| Event | Description |
|-------|-------------|
| `on:dismiss` | Fired when toast is dismissed |