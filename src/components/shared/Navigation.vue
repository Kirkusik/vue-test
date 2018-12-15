<template>
    <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
          <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="mainNavbar">
             <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li v-for="(route, index) in routes" :key="index" :class="['nav-item', route.isActive ? 'active' : '']">
                    <router-link class="nav-link" :to="{ path: route.path }">{{ route.display }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Router,{ RouterOptions, RouteConfig } from 'vue-router';

@Component
export default class Navigation extends Vue {    
    get routes(): RouteNav[] {
        let options = (this.$router as any).options as RouterOptions
        

        if(options == null)
        {
            return [];            
        }

        let routes = <RouteNav[]>[];

        let rootRoutes = (options.routes || <RouteConfig[]>[])

        if(rootRoutes == null || rootRoutes.length == 0)
        {
            return [];
        }

        let childRoutes = rootRoutes[0].children || [];

        for(var route of childRoutes)
        {
            routes.push({ 
                display: this.stringToTitleCase(route.name || ''),
                path: route.path, 
                isActive: this.$router.currentRoute.name == route.name && route.name != null 
            });
        }

        return routes;
    }

    stringToTitleCase(input: string)
    {
        return input.replace(
                    /\w\S*/g,
                    function(txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    }
                );
    }            
}

export interface RouteNav
{
    isActive: boolean;
    display: string;
    path: string;
}

</script>
