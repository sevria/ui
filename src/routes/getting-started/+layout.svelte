<script lang="ts">
  import { DocLayout } from '$internal';

  let { children } = $props();
</script>

<DocLayout>
  {@render children()}
</DocLayout>
