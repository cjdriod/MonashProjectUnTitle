<template>
  <v-card>
    <v-toolbar extended>
      <v-card-title>My Public Project List</v-card-title>
      <template v-slot:extension>
        <v-fab-transition>
          <v-btn
            color="pink"
            fab
            dark
            absolute
            bottom
            right
            @click="openDialog('open')"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
    </v-toolbar>
    <v-card-text class="mt-8">
      <v-simple-table fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Project Title</th>
              <th class="text-left"># Of Participant</th>
              <th class="text-left">Difficulty</th>
              <th class="text-left">Due Date</th>
              <th class="text-left">Status</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in task" :key="item.name">
              <td>{{ item.title }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.difficulty }}</td>
              <td>{{ item.dueDate }}</td>
              <td>{{ item.status }}</td>
              <td>
                <v-btn icon @click="openDialog('edit')">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>

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
          <v-toolbar-title>{{
            editMode ? "Edit Project" : "Add New Project"
          }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container class="mt-12">
          <v-text-field
            v-model="field.projectName"
            label="Project Title"
            required
            :disabled="isReadOnly"
          ></v-text-field>
          <v-combobox
            v-model="field.keyword"
            label="Project Keyword"
            multiple
            chips
          ></v-combobox>
          <v-select
            :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            label="Level of Difficulties"
            :value="5"
          ></v-select>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
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
              v-model="field.dueDate"
              no-title
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
          <v-textarea
            auto-grow
            name="input-7-1"
            label="Project Description"
            :disabled="isReadOnly"
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
  name: "TaskManage",
  data() {
    return {
      isReadOnly: false,
      task: [
        {
          title: "Complex Number Algebra",
          number: "4",
          difficulty: "5",
          dueDate: "2019-12-21",
          status: "On-Going"
        },
        {
          title: "Recipe Creator and Manager",
          number: "12",
          difficulty: "3",
          dueDate: "2019-12-21",
          status: "On-Going"
        },
        {
          title: "Yundt Ltd App Interface Design",
          number: "33",
          difficulty: "3",
          dueDate: "2019-2-21",
          status: "Expired"
        }
      ],
      field: {
        projectName: "Complex Number Algebra",
        keyword: ["Machine Learning", "AWS", "Python"],
        difficulty: "6",
        dueDate: "2019-2-21",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac metus mi. Cras lobortis ac nisl ac suscipit. Quisque auctor nisl quis ante iaculis accumsan. Integer sed neque ut lectus volutpat venenatis. Cras rutrum diam sit amet nunc eleifend ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean dictum mauris nunc, non commodo orci interdum vitae. Duis a nulla a lacus auctor vehicula nec eget risus.Praesent at quam ultrices, ultrices enim nec, lobortis sem. Nunc ac erat non arcu lacinia porta eget vel ligula. Aliquam quis lorem ipsum. Cras iaculis libero pretium dolor ultrices, ut vehicula urna luctus. Nam fermentum leo rhoncus, euismod dolor nec, ultrices magna. Cras ac sem vitae ex convallis posuere vitae ac sem. Quisque luctus ligula cursus diam volutpat euismod. Vestibulum pellentesque quam ac turpis aliquam egestas. Duis dui metus, rhoncus id arcu non, congue hendrerit odio. Duis tristique molestie odio a placerat. Sed ut sagittis risus, in feugiat metus. Mauris odio nunc, interdum ut tellus quis, mattis tincidunt metus. Vivamus molestie egestas quam, sed vestibulum dui efficitur at. Nullam eleifend lacus eget quam varius, non vestibulum tellus mattis. Fusce quis mollis augue, vitae tempor orci. Nulla eget facilisis magna. Nam dignissim dui in lacus molestie efficitur. Nunc aliquam in augue a sollicitudin. Donec cursus mauris eget pellentesque lacinia. Curabitur suscipit ex non luctus fringilla. Sed eu libero aliquam nunc fermentum tincidunt in sed ante. Vivamus et enim vitae elit fringilla aliquet sit amet a risus. Quisque tincidunt lorem id viverra blandit. Nullam in neque eu nisl suscipit finibus ac id dolor. Praesent rhoncus, urna vitae iaculis pretium, erat augue ornare mi, ut pharetra eros ante tempus arcu.Morbi erat lectus, tempor nec tortor vel, ullamcorper hendrerit eros. Curabitur vitae dictum lacus. Donec id viverra quam, eu efficitur dolor. Fusce tempus risus eu massa posuere ultricies. Aenean finibus risus vel quam blandit, id dapibus nisl ultricies. Aenean ac velit ligula. Duis sodales, diam sed maximus porta, justo enim eleifend lacus, vel consectetur sapien magna non nibh. Nullam volutpat diam quis est tempus, non posuere ex aliquam. In et massa tristique orci cursus ultricies sed eget enim. Sed vitae diam non magna tempor accumsan non quis metus.`
      },
      dialog: false,
      editMode: false,
      menu2: false
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

<style scoped></style>
