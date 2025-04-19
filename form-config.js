Formio.createForm(document.getElementById('formio'), {
  components: [
    {
      type: 'textfield',
      key: 'firstName',
      label: 'First Name',
      placeholder: 'Enter your first name',
      input: true,
      validate: { required: true }
    },
    {
      type: 'textfield',
      key: 'lastName',
      label: 'Last Name',
      placeholder: 'Enter your last name',
      input: true,
      validate: { required: true }
    },
    {
      type: 'email',
      key: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      input: true,
      validate: { required: true }
    },
    {
      type: 'select',
      key: 'role',
      label: 'Your Role',
      placeholder: 'Select your role',
      data: {
        values: [
          { value: 'lawyer', label: 'Lawyer' },
          { value: 'worker', label: 'Worker' },
          { value: 'manager', label: 'Manager' },
          { value: 'judge', label: 'Judge' }
        ]
      },
      input: true,
      validate: { required: true }
    },
    {
      type: 'textarea',
      key: 'message',
      label: 'What kind of support do you expect?',
      placeholder: 'Tell us about your expectations or needs...',
      rows: 4,
      input: true
    },
    {
      type: 'button',
      action: 'submit',
      label: 'Submit',
      theme: 'primary'
    }
  ]
}).then(function(form) {
  form.on('submit', function(submission) {
    console.log('Submitted:', submission.data);
  });
});