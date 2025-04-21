FormValidation.formValidation(document.getElementById("PreregistrationForm"), {
  fields: {
    fullName: {
      validators: {
        notEmpty: {
          message: "Please enter your name or pseudonym",
        },
      },
    },
    occupation: {
      validators: {
        notEmpty: {
          message: "Please enter your role",
        },
      },
    },
    nationality: {
      validators: {
        notEmpty: {
          message: "Please enter your nationality",
        },
      },
    },
    help: {
      validators: {
        notEmpty: {
          message: "Please describe your expectations",
        },
      },
    },
  },
  plugins: {
    submitButton: new FormValidation.plugins.SubmitButton(),
  },
});
