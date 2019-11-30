<template>
  <v-card class="mx-auto" max-width="900">
    <v-card-text>
      <div><h2>Students Profile</h2></div>
      <br />
      <div class="text-center">
        <v-avatar size="100">
          <img
            src="https://scontent-kut2-1.xx.fbcdn.net/v/t31.0-8/20017711_10213442555599095_5356830855275639108_o.jpg?_nc_cat=105&_nc_ohc=8PJzH2HfprIAQkOoeoupUazskAmdGjsiqpYv--zBUm_miScznaKi27wmA&_nc_ht=scontent-kut2-1.xx&oh=1c597f516d56155a336eb42cb93857ab&oe=5E8A07E0"
            alt="Albert Jonathan"
          />
        </v-avatar>
      </div>
      <v-divider class="mx-4" inset vertical></v-divider>
      <div class="text--primary">
        <div class="text-center">
          <br />
          <p>Chen Peng Xian</p>
          <v-list-item-action class="mt-0">
            <v-btn icon>
              <span class="mdi mdi-email-edit-outline headline"></span>
            </v-btn>
          </v-list-item-action>
          <v-list-item-action class="mt-0">
            <v-btn icon>
              <span class="mdi mdi-linkedin headline"></span>
            </v-btn>
          </v-list-item-action>
        </div>
        <br /><studentForm />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import studentForm from "./studentForm";
export default {
  components: {
    studentForm
  }
};
</script>
