# Menu

The Menu component provides a list of options or actions that users can choose from.

## Import

```svelte
<script>
  import { Menu, MenuItem } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Menu>
  <MenuItem>New File</MenuItem>
  <MenuItem>Open File</MenuItem>
  <MenuItem>Save</MenuItem>
  <MenuItem disabled>Save As...</MenuItem>
</Menu>
```

## With Icons and Shortcuts

```svelte
<Menu>
  <MenuItem icon="add">New File <span slot="shortcut">Ctrl+N</span></MenuItem>
  <MenuItem icon="folder">Open <span slot="shortcut">Ctrl+O</span></MenuItem>
  <MenuItem divider />
  <MenuItem icon="save">Save <span slot="shortcut">Ctrl+S</span></MenuItem>
</Menu>
```

## Submenu

```svelte
<Menu>
  <MenuItem>File</MenuItem>
  <MenuItem>
    Edit
    <Menu slot="submenu">
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
    </Menu>
  </MenuItem>
</Menu>
```

## Properties

### Menu

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Whether the menu is open |

### MenuItem

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `divider` | `boolean` | `false` | Render as a divider |
| `icon` | `string` | `undefined` | Icon name |

## Slots

| Slot | Description |
|------|-------------|
| `shortcut` | Keyboard shortcut display |
| `submenu` | Submenu content |

## Events

| Event | Description |
|-------|-------------|
| `on:click` | Fired when a menu item is clicked |