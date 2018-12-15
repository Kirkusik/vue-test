<template>
<div class="app-layout">
    <router-view></router-view>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {    
}

</script>
