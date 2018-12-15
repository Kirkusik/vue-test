<template>
    <div>
        <navigation></navigation>
        <main role="main" class="container">
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Navigation from './Navigation.vue';

@Component({
     components: {
         Navigation
     }})
export default class Layout extends Vue {    
}

</script>
