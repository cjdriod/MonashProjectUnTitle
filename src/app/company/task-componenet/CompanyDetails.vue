<template>
  <v-card class="px-7">
    <v-card-title>My Company Detail</v-card-title>
    <div class="text-center pa-5">
      <v-avatar size="128">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vx7Cn1IuvIZs95Hn5IpJZ-tZx1ZatgFiVtxLXrIoeuVdJ9tHuA&s"
        />
      </v-avatar>
      <div class="pt-2">
        <v-btn outlined color="brown">
          Change Profile Picture
        </v-btn>
      </div>
    </div>
    <v-row class="ma-0 text-center">
      <v-col cols="7">
        <v-text-field
          v-model="companyName"
          label="Register Company Name"
          required
          :disabled="isReadOnly"
        ></v-text-field>
        <v-select
          :items="items"
          multiple
          v-model="companyType"
          label="Company Types"
          chips
          required
          :disabled="isReadOnly"
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col cols="7">
        <v-text-field
          prepend-icon="mdi-email"
          v-model="emailAddress"
          label="Email"
          required
          :disabled="isReadOnly"
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-phone"
          v-model="telNumber"
          label="Tel. Number"
          required
          :disabled="isReadOnly"
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-map-marker"
          v-model="addresses"
          label="Address"
          required
          :disabled="isReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col cols="7">
        <v-textarea
          name="input-7-1"
          label="Company Introduction"
          :disabled="isReadOnly"
          value="We are a Software House specializes in producing software and mobile web, but not only. We offer consulting services outside, we design and build software systems to improve and optimize information and processes."
        ></v-textarea>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CompanyDetails",
  props: {
    isReadOnly: { type: Boolean, default: false }
  },
  data() {
    return {
      companyName: "Yundt Ltd",
      items: [
        "Information Technology",
        "Design",
        "Science",
        "Digital Marketing",
        "Public Relationship"
      ],
      companyType: ["Information Technology", "Digital Marketing"],
      emailAddress: "yundtLtd@gmail.com",
      telNumber: "03-3123131313",
      addresses:
        "116, Jalan Tengku Badar, Kampung Raja Uda, 42000 Pelabuhan Klang, Selangor"
    };
  }
};
</script>

<style scoped></style>
