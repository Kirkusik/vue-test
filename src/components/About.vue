<template>
<div class="home">
    <h3>{{ message }}</h3>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {    
    get message(): string{
        return 'About Page!';
    }
}

</script>

<style>

</style>
