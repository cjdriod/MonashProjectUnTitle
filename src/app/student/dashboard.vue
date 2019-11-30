<template>
  <v-card color="white">
    <v-tabs v-model="tab" grow>
      <v-tab>Project</v-tab>
      <v-tab>Internship</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <div class="ma-5">
          <v-row>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-magnify"
                label="Search Keyword"
                name="Keyword"
                type="text"
              />
              <v-card class=" mb-5">
                <v-card-text>
                  <div>Yundt Ltd</div>
                  <p class="display-1 text--primary">
                    Complex Number Algebra
                  </p>
                  <p>
                    Difficulty
                    <v-icon v-for="i in 5" :key="i">
                      mdi-hexagram-outline
                    </v-icon>
                  </p>
                  <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="blue accent-4" @click="openDialog('view')">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card class=" mb-5">
                <v-card-text>
                  <div>COMPANY XXX</div>
                  <p class="display-1 text--primary">
                    UX/UI Web Design
                  </p>
                  <p>
                    Difficulty
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                  </p>
                  <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="blue accent-4">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card class=" mb-5">
                <v-card-text>
                  <div>COMPANY ABC</div>
                  <p class="display-1 text--primary">
                    Software Tester
                  </p>
                  <p>
                    Difficulty
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                  </p>
                  <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="blue accent-4">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card class=" mb-5">
                <v-card-text>
                  <div>COMPANY DEF</div>
                  <p class="display-1 text--primary">
                    ASM Scripting
                  </p>
                  <p>
                    Difficulty
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                    <v-icon>
                      mdi-hexagram-outline
                    </v-icon>
                  </p>
                  <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="blue accent-4">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="ma-5">
          <v-row>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-magnify"
                label="Search Keyword"
                name="Keyword"
                type="text"
              />
              <v-card class=" mb-5">
                <v-card-text>
                  <p class="display-1 text--primary">
                    Computer Enginner
                  </p>
                  <p class="display-1 text--secondary">
                    DBP Inc.
                  </p>
                  <p></p>
                  <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="blue accent-4">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card class=" mb-5">
                <v-card-text>
                  <p class="display-1 text--primary">
                    System Architecuture
                  </p>
                  <p class="display-1 text--secondary">
                    GARY Inc.
                  </p>
                  <p></p>
                  <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="blue accent-4">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card class=" mb-5">
                <v-card-text>
                  <p class="display-1 text--primary">
                    Software Engineer
                  </p>
                  <p class="display-1 text--secondary">
                    GCP Inc.
                  </p>
                  <p></p>
                  <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="blue accent-4">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card class=" mb-5">
                <v-card-text>
                  <p class="display-1 text--primary">
                    Data Analysis Researcher
                  </p>
                  <p class="display-1 text--secondary">
                    YYY Inc.
                  </p>
                  <p></p>
                  <div class="text--primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="blue accent-4">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-tab-item>
    </v-tabs-items>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>
            Project Details
            </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark color="green" @click="dialog = false">Start This Project</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container class="mt-12">
          <v-text-field
            v-model="field.projectName"
            label="Project Title"
            required
            :readonly="isReadOnly"
          ></v-text-field>
          <v-combobox
            v-model="field.keyword"
            label="Project Keyword"
            multiple
            chips
            :readonly="isReadOnly"
          ></v-combobox>
          <v-select
            :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            label="Level of Difficulties"
            :value="5"
            :readonly="isReadOnly"
          ></v-select>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
            :readonly="isReadOnly"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="field.dueDate"
                label="Project Due Date"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-if="false"
              v-model="field.dueDate"
              no-title
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
          <v-textarea
            auto-grow
            name="input-7-1"
            label="Project Description"
            :dis="isReadOnly"
            v-model="field.description"
          ></v-textarea>
          <v-file-input label="Supporting Materials"></v-file-input>
        </v-container>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      field: {
        projectName: "Complex Number Algebra",
        keyword: ["Machine Learning", "AWS", "Python"],
        difficulty: "6",
        dueDate: "2019-2-21",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac metus mi. Cras lobortis ac nisl ac suscipit. Quisque auctor nisl quis ante iaculis accumsan. Integer sed neque ut lectus volutpat venenatis. Cras rutrum diam sit amet nunc eleifend ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean dictum mauris nunc, non commodo orci interdum vitae. Duis a nulla a lacus auctor vehicula nec eget risus.Praesent at quam ultrices, ultrices enim nec, lobortis sem. Nunc ac erat non arcu lacinia porta eget vel ligula. Aliquam quis lorem ipsum. Cras iaculis libero pretium dolor ultrices, ut vehicula urna luctus. Nam fermentum leo rhoncus, euismod dolor nec, ultrices magna. Cras ac sem vitae ex convallis posuere vitae ac sem. Quisque luctus ligula cursus diam volutpat euismod. Vestibulum pellentesque quam ac turpis aliquam egestas. Duis dui metus, rhoncus id arcu non, congue hendrerit odio. Duis tristique molestie odio a placerat. Sed ut sagittis risus, in feugiat metus. Mauris odio nunc, interdum ut tellus quis, mattis tincidunt metus. Vivamus molestie egestas quam, sed vestibulum dui efficitur at. Nullam eleifend lacus eget quam varius, non vestibulum tellus mattis. Fusce quis mollis augue, vitae tempor orci. Nulla eget facilisis magna. Nam dignissim dui in lacus molestie efficitur. Nunc aliquam in augue a sollicitudin. Donec cursus mauris eget pellentesque lacinia. Curabitur suscipit ex non luctus fringilla. Sed eu libero aliquam nunc fermentum tincidunt in sed ante. Vivamus et enim vitae elit fringilla aliquet sit amet a risus. Quisque tincidunt lorem id viverra blandit. Nullam in neque eu nisl suscipit finibus ac id dolor. Praesent rhoncus, urna vitae iaculis pretium, erat augue ornare mi, ut pharetra eros ante tempus arcu.Morbi erat lectus, tempor nec tortor vel, ullamcorper hendrerit eros. Curabitur vitae dictum lacus. Donec id viverra quam, eu efficitur dolor. Fusce tempus risus eu massa posuere ultricies. Aenean finibus risus vel quam blandit, id dapibus nisl ultricies. Aenean ac velit ligula. Duis sodales, diam sed maximus porta, justo enim eleifend lacus, vel consectetur sapien magna non nibh. Nullam volutpat diam quis est tempus, non posuere ex aliquam. In et massa tristique orci cursus ultricies sed eget enim. Sed vitae diam non magna tempor accumsan non quis metus.`
      },
      dialog: false,
      editMode: false,
      menu2: false,
      isReadOnly: true,
    };
  },
  methods: {
    openDialog(mode) {
      this.dialog = true;
      mode === "edit" ? (this.editMode = true) : (this.editMode = false);
    }
  }
};
</script>

<style></style>
