# Search

The Search component provides a specialized input field for search functionality with optional search icon.

## Import

```svelte
<script>
  import { Search } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { Search } from 'svelte-fluentui';

  let searchQuery = '';
  let productSearch = '';
  let userSearch = '';
  let searchResults = [];

  function handleSearch(event) {
    const query = event.detail.value;
    searchResults = [`Result 1 for "${query}"`, `Result 2 for "${query}"`, `Result 3 for "${query}"`];
  }

  function handleClear() {
    searchResults = [];
  }
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <Search bind:value={searchQuery} placeholder="Search anything..." />
  <br><br>

  <Search
    label="Search products"
    bind:value={productSearch}
    placeholder="Enter product name..."
  />
  <br><br>

  <Search
    label="Search users"
    bind:value={userSearch}
    placeholder="Search users..."
    on:search={handleSearch}
    on:clear={handleClear}
  />
  <br><br>

  <Search label="Disabled Search" placeholder="Cannot search..." disabled />

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Values:</strong><br>
    General search: {searchQuery || 'Empty'}<br>
    Product search: {productSearch || 'Empty'}<br>
    User search: {userSearch || 'Empty'}

    {#if searchResults.length > 0}
      <br><br><strong>Search Results:</strong>
      {#each searchResults as result}
        <br>• {result}
      {/each}
    {/if}
  </div>
</div>

## Basic Usage

```svelte
<Search placeholder="Search..." />
```

## With Label

```svelte
<Search label="Search products" placeholder="Enter product name..." />
```

## With Search Handler

```svelte
<Search
  placeholder="Search users..."
  on:search={(e) => handleSearch(e.detail.value)}
/>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the search field |
| `value` | `string` | `''` | Current search value |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `disabled` | `boolean` | `false` | Whether the search is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:input` | Fired as user types |
| `on:search` | Fired when search is triggered |
| `on:clear` | Fired when search is cleared |