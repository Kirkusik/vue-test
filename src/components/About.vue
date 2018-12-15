<template>
<div class="home">
    <h3>{{ test }}</h3>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {    
    get test(): string{
        return 'About Page!';
    }
}

</script>

<style>

</style>
