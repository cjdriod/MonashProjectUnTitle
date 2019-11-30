<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <template v-for="(tab, index) in menuItem">
          <v-list-item link :key="index" :to="tab.link">
            <v-list-item-action>
              <v-icon>{{ tab.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ tab.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <template v-slot:append>
        <div class="pa-3">
          <v-btn block outlined :to="logoutRoute"
            ><v-icon>mdi-logout</v-icon>Logout</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="blue darken-3" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Albert @ Edu Synergy</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-badge color="red" overlap>
          <template v-slot:badge>
            <span>1</span>
          </template>
          <v-icon>mdi-bell-ring-outline</v-icon>
        </v-badge>
      </v-btn>

      <v-btn text :to="logoutRoute">
        Logout
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-col>
          <router-view />
        </v-col>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "base-template",
  data: () => ({
    drawer: null,
    logoutRoute: { name: "login" },
    menuItem: [
      {
        name: "Dashboard",
        icon: "mdi-view-dashboard",
        link: { name: "dashboard" }
      },
      {
        name: "My Profile",
        icon: "mdi-account-box",
        link: { name: "profile" }
      },
      {
        name: "My On-Going Project",
        icon: "mdi-folder",
        link: { name: "myTask" }
      }
    ]
  }),
  mounted() {
    // this.$vuetify.theme.dark = true;
  }
};
</script>

<style scoped></style>
