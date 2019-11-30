
<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login Page</v-toolbar-title>
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
                      :href="LinkedIn"
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
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon='mdi-account-circle'
                    label="Login"
                    name="login"
                    type="text"
                  />
                  <v-text-field
                    :type="showPassword ? 'text' : 'password'" 
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  />
                  <v-checkbox
                    v-model="checkbox"
                    :label="`Remember me`"
                  ></v-checkbox>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn 
                color="primary"
                block="true"
                >Login</v-btn>
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
  name: "LoginPage"
};
</script>

<style scoped></style>
