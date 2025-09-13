# Toolbar

The Toolbar component provides a container for grouping action buttons and controls.

## Import

```svelte
<script>
  import { Toolbar } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Toolbar>
  <Button>New</Button>
  <Button>Open</Button>
  <Button>Save</Button>
  <Divider orientation="vertical" />
  <Button>Cut</Button>
  <Button>Copy</Button>
  <Button>Paste</Button>
</Toolbar>
```

## With Icon Buttons

```svelte
<Toolbar>
  <Button icon="add" variant="ghost">New</Button>
  <Button icon="folder" variant="ghost">Open</Button>
  <Button icon="save" variant="ghost">Save</Button>
</Toolbar>
```

## Vertical Toolbar

```svelte
<Toolbar orientation="vertical">
  <Button icon="home">Home</Button>
  <Button icon="search">Search</Button>
  <Button icon="settings">Settings</Button>
</Toolbar>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Toolbar layout direction |
| `variant` | `'default' \| 'subtle'` | `'default'` | Toolbar visual style |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Toolbar content and controls |