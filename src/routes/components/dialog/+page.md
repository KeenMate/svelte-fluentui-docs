# Dialog

The Dialog component displays content in a modal overlay, requiring user interaction before proceeding.

## Import

```svelte
<script>
  import { Dialog } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Dialog open={showDialog} on:close={() => showDialog = false}>
  <h2>Confirm Action</h2>
  <p>Are you sure you want to delete this item?</p>

  <div slot="actions">
    <Button on:click={() => showDialog = false}>Cancel</Button>
    <Button variant="primary">Delete</Button>
  </div>
</Dialog>
```

## With Custom Size

```svelte
<Dialog open={showDialog} size="large">
  <h2>Large Dialog</h2>
  <p>This dialog has more space for content.</p>
</Dialog>
```

## Non-Modal Dialog

```svelte
<Dialog open={showDialog} modal={false}>
  <p>This dialog doesn't block interaction with the background.</p>
</Dialog>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Whether the dialog is open |
| `modal` | `boolean` | `true` | Whether the dialog is modal |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Dialog size |
| `closable` | `boolean` | `true` | Show close button |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Main dialog content |
| `actions` | Action buttons area |

## Events

| Event | Description |
|-------|-------------|
| `on:close` | Fired when dialog is closed |
| `on:open` | Fired when dialog is opened |