const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const previousFormData = JSON.parse(localStorage.getItem(localStorageKey));
if (previousFormData) {
  formData = previousFormData;
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = form.elements.email.value.trim();
  const messageInput = form.elements.message.value.trim();

  if (emailInput === '' || messageInput === '') {
    alert('Fill please all fields');
    return;
  }

  formData = {
    email: emailInput,
    message: messageInput,
  };

  console.log(formData);
  console.log(localStorage);

  form.reset();
});
