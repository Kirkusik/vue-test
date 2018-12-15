<template>
<div class="home">
    <h3>{{ test }}}</h3>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {    
    get test(): string{
        return 'Goof Troop!';
    }
}

</script>

<style>

</style>
