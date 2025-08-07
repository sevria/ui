<script lang="ts">
  import { Sidebar } from '$lib/index.js';
  import {
    CircleUserRound,
    LayoutDashboard,
    LibraryBig,
    LogOut,
    Settings,
    UsersRound
  } from '@lucide/svelte';
</script>

<Sidebar.Root>
  <Sidebar.Logo />

  <Sidebar.Links>
    <Sidebar.Link href="#" icon={LayoutDashboard}>Dashboard</Sidebar.Link>
    <Sidebar.Link href="#" icon={LibraryBig}>Collections</Sidebar.Link>
    <Sidebar.Link href="#" icon={UsersRound}>Users</Sidebar.Link>
    <Sidebar.Link href="#" icon={Settings}>Settings</Sidebar.Link>
    <Sidebar.Link href="#" icon={CircleUserRound}>Profile</Sidebar.Link>
    <Sidebar.Link href="#" icon={LogOut}>Log out</Sidebar.Link>
  </Sidebar.Links>
</Sidebar.Root>

<div class="ml-72 px-8 py-6">
  <p>Your content goes here</p>
</div>
