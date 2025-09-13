# Tree

The Tree component displays hierarchical data in a tree structure with expandable nodes.

## Import

```svelte
<script>
  import { Tree, TreeItem } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Tree>
  <TreeItem>
    Folder 1
    <TreeItem>File 1.1</TreeItem>
    <TreeItem>File 1.2</TreeItem>
  </TreeItem>
  <TreeItem>
    Folder 2
    <TreeItem>File 2.1</TreeItem>
  </TreeItem>
</Tree>
```

## With Selection

```svelte
<Tree selectable>
  <TreeItem value="root">
    Root
    <TreeItem value="child1">Child 1</TreeItem>
    <TreeItem value="child2">Child 2</TreeItem>
  </TreeItem>
</Tree>
```

## Expanded by Default

```svelte
<Tree>
  <TreeItem expanded>
    Documents
    <TreeItem>document1.pdf</TreeItem>
    <TreeItem>document2.docx</TreeItem>
  </TreeItem>
</Tree>
```

## Properties

### Tree

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `selectable` | `boolean` | `false` | Enable item selection |
| `multiple` | `boolean` | `false` | Allow multiple selections |

### TreeItem

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `undefined` | Item value for selection |
| `expanded` | `boolean` | `false` | Whether the item is expanded |
| `disabled` | `boolean` | `false` | Whether the item is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:expand` | Fired when an item is expanded |
| `on:collapse` | Fired when an item is collapsed |
| `on:select` | Fired when an item is selected |