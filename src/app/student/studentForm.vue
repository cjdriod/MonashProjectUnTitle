<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Skill is required']"
      label="Skills"
      required
      multiple
    ></v-select>

    <v-select
      v-model="select2"
      :items="certificates"
      label="Certificates"
      required
      multiple
    ></v-select>
    <v-file-input
      v-model="files"
      placeholder="Upload your portfolio, assignments, and official school transcripts"
      label="File input"
      multiple
      prepend-icon="mdi-paperclip"
    >
      <template v-slot:selection="{ text }">
        <v-chip small label color="primary">
          {{ text }}
        </v-chip>
      </template>
    </v-file-input>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="By updating your profile, you are agreed to follow our code of conduct and honest with your academic background"
      required
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox2"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="In case for any missing documents or diserpancy, you are willing to cooperate with us to provide evidence of your competency"
      required
    ></v-checkbox>
    <v-btn color="success" class="mr-4"  @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>
    <v-text-field color="success"  disabled></v-text-field>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "Albert Jonathan",
    nameRules: [v => !!v || "Name is required"],
    email: "albert@gmail.com",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: ["C++", "Accounting"],
    select2: ["ACCA certificate", "SAP Certified"],
    items: ["C++", "Accounting", "Finance", "Cooking"],
    certificates: [
      "ACCA certificate",
      "SAP Certified",
      "AWS DevOps certification"
    ],
    files: [],
    checkbox: false,
    checkbox2: false,
    dialog: false,
    modalSuccess: false
  }),

  methods: {
    validate() {
      setTimeout(() => (this.isHidden = false), 3000);
      if (this.$refs.form.validate()) {
        this.modalSuccess = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
