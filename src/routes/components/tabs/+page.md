# Tabs

The Tabs component organizes content into multiple panels, allowing users to switch between them.

## Import

```svelte
<script>
  import { Tabs, Tab, TabPanel } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Tabs>
  <Tab>Overview</Tab>
  <Tab>Details</Tab>
  <Tab>Reviews</Tab>

  <TabPanel>
    <p>Overview content...</p>
  </TabPanel>
  <TabPanel>
    <p>Details content...</p>
  </TabPanel>
  <TabPanel>
    <p>Reviews content...</p>
  </TabPanel>
</Tabs>
```

## With Default Active Tab

```svelte
<Tabs activeIndex={1}>
  <Tab>First</Tab>
  <Tab>Second</Tab>
  <Tab>Third</Tab>

  <TabPanel>First panel</TabPanel>
  <TabPanel>Second panel</TabPanel>
  <TabPanel>Third panel</TabPanel>
</Tabs>
```

## Properties

### Tabs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `activeIndex` | `number` | `0` | Currently active tab index |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Tab orientation |

### Tab

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Whether the tab is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when active tab changes |