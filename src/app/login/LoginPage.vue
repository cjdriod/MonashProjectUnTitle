<template>
  <v-app>
    <v-content
      :style="{
        background: `url('https://www.setaswall.com/wp-content/uploads/2017/04/Material-Wallpaper-4-1920x1080.png')`
      }"
    >
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12 pb-6">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Edu Synergy <v-icon>mdi-copyright</v-icon></v-toolbar-title>
                <v-spacer />
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      href="https://facebook.com"
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-facebook-box</v-icon>
                    </v-btn>
                  </template>
                  <span>Facebook</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-linkedin-box</v-icon>
                    </v-btn>
                  </template>
                  <span>LinkedIn</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text class="pb-0">
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account-circle"
                    label="Login"
                    name="login"
                    type="text"
                    v-model="username"
                  />
                  <v-text-field
                    label="Password"
                    prepend-icon="mdi-lock"
                  />
                  <v-checkbox
                    v-model="checkbox"
                    :label="`Remember me`"
                  ></v-checkbox>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="login" color="primary" block>Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      checkbox: true,
    };
  },
  methods: {
    login() {
      if (this.username === "company") {
        this.$router.push({ name: "companyLanding" });
      } else {
        this.$router.push({ name: "userLanding" });
      }
    }
  }
};
</script>

<style scoped></style>
