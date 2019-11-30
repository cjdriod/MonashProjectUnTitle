<template>
  <v-card height="620">
    <v-card-title>Dashboard</v-card-title>

    <v-row class="mx-6">
      <v-col cols="6">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 16 : 2" :to="{ name: 'ManageTask' }">
            <v-card-title>On-Going Project</v-card-title>
            <v-col>
              <ul class="pl-0">
                <template v-for="i in taskList">
                  <ol :key="i.title" class="pb-1">
                    {{
                      i.title
                    }}
                    <span class="grey--text text--lighten-1 pl-4"
                      ># of participant: {{ i.count }}</span
                    >
                  </ol>
                </template>
              </ul>
            </v-col>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="6">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 16 : 2" :to="{ name: 'ManageTask' }">
            <v-card-title>Internship Application</v-card-title>
            <v-col class="ml-5">
              <p>pending:</p>
              <ul class="pl-0">
                <template v-for="i in pendingList">
                  <ol :key="i.name" class="pb-1">
                    {{
                      i.name
                    }}
                    <v-chip class="ml-3" :color="i.color">{{ i.job }}</v-chip>
                  </ol>
                </template>
              </ul>
            </v-col>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CompanyDashboard",
  data() {
    return {
      pendingList: [
        { name: "Mary Hogan", job: "Andriod Developer", color: "green" },
        { name: "Hafsa Hess", job: "Backend Developer", color: "grey" },
        { name: "Pippa Hayes", job: "Web Developer", color: "blue" }
      ],
      taskList: [
        { title: "Complex Number Algebra", count: "4" },
        { title: "Recipe Creator and Manager", count: "12" }
      ]
    };
  }
};
</script>

<style scoped></style>
