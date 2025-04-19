Formio.createForm(document.getElementById("formio"), {
  components: [
    // Phone (Yes/No)
    {
      type: "select",
      key: "preferCall",
      label: "Phone",
      placeholder:
        "Would a phone call be more convenient than filling this form?",
      input: true,
      data: {
        values: [
          { value: "yes", label: "Yes, please — here’s my number" },
          { value: "no", label: "No, I prefer to continue" },
        ],
      },
      dataSrc: "values",
      validate: { required: true },
    },

    {
      type: "phoneNumber",
      key: "phoneNumber",
      label: "Your phone number",
      placeholder: "Include country code if possible",
      input: true,
      conditional: {
        show: true,
        when: "preferCall",
        eq: "yes",
      },
      validate: {
        required: true,
      },
    },
    // First Name
    {
      type: "textfield",
      key: "firstName",
      label: "Name",
      placeholder: "Use your first name or a pseudonym",
      input: true,
      validate: { required: true },
    },
    // Age
    {
      type: "datetime",
      label: "Age",
      key: "birthdate",
      format: "yyyy-MM-dd",
      placeholder: "e.g., 1990-05-15",
      input: true,
      required: false,
      widget: {
        type: "calendar",
        displayInTimezone: "viewer",
        mode: "single",
      },
    },
    // Nationality
    {
      type: "textfield",
      key: "nationality",
      label: "Nationality",
      placeholder: "e.g., Pakistani, Cameroonian, Syrian",
      input: true,
      validate: { required: true },
    },
    // Occupation
    {
      type: "select",
      key: "role",
      label: "Roles",
      placeholder: "Choose one or several roles, past or present",
      data: {
        values: [
          { value: "dishwasher", label: "Dishwasher" },
          { value: "kitchen_assistant", label: "Kitchen Assistant" },
          { value: "cook", label: "Cook" },
          { value: "waiter", label: "Waiter / Waitress" },
          { value: "security", label: "Security Staff" },
          { value: "cleaning", label: "Cleaning Staff" },
          { value: "syndicalist", label: "Union Member / Syndicalist" },
          { value: "lawyer", label: "Lawyer" },
          { value: "employer", label: "Employer / Restaurant Owner" },
          { value: "hr", label: "HR / Admin Staff" },
          { value: "visitor", label: "Visitor / Supporter" },
        ],
      },
      input: true,
      validate: { required: true },
    },
    // Experience Conflict Toggle (Yes/No)
    {
      type: "select",
      key: "badExperience",
      label: "Experience",
      placeholder: "Tell us briefly about the situation that brings you here.",
      data: {
        values: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      input: true,
      validate: { required: true },
    },
    // Conditional: When did this happen (Year)
    {
      type: "textfield",
      key: "incidentYear",
      label: "Year",
      placeholder: "e.g., 2022",
      input: true,
      conditional: {
        when: "badExperience",
        eq: "yes",
      },
    },

    // Conditional: Company or Institution
    {
      type: "textfield",
      key: "incidentEmployer",
      label: "Name of the company or restaurant",
      placeholder: "e.g., Quan Malmö",
      input: true,
      conditional: {
        when: "badExperience",
        eq: "yes",
      },
    },
    {
      type: "email",
      key: "email",
      label: "Email",
      placeholder: "Enter your email",
      input: true,
      validate: { required: true },
    },

    {
      type: "textarea",
      key: "message",
      label: "What kind of support do you expect?",
      placeholder: "Tell us about your expectations or needs...",
      rows: 4,
      input: true,
    },
    {
      type: "button",
      action: "submit",
      label: "Submit",
      theme: "primary",
    },
  ],
}).then(function (form) {
  form.on("submit", function (submission) {
    console.log("Submitted:", submission.data);
  });
});
