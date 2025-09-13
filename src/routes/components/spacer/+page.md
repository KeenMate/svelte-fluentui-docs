# Spacer

The Spacer component provides flexible spacing in layouts, useful for pushing elements apart or creating consistent gaps.

## Import

```svelte
<script>
  import { Spacer } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<div style="display: flex;">
  <div>Left content</div>
  <Spacer />
  <div>Right content</div>
</div>
```

## Fixed Size Spacer

```svelte
<Stack orientation="horizontal">
  <Button>First</Button>
  <Spacer size="20px" />
  <Button>Second</Button>
</Stack>
```

## Vertical Spacer

```svelte
<div>
  <p>Above</p>
  <Spacer orientation="vertical" size="50px" />
  <p>Below</p>
</div>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `string` | `undefined` | Fixed size (e.g., '20px', '2rem') |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Spacer direction |