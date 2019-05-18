
import { home as El } from '../../Globals/globals-selectors';

export const contact = {
  submit(evt, scope) {
    evt.preventDefault();
    scope.app.state.isSubmitingForm = true;
    scope.app.state.contactForm.buttonText = 'Sending...';

    const name = El.$contactForm.querySelector('#name').value;
    const email = El.$contactForm.querySelector('#email').value;
    const subject = El.$contactForm.querySelector('#subject').value;
    const message = El.$contactForm.querySelector('#message').value;

    const data = {
      addressee: 'nunesrodrigo13@outlook.com',
      name,
      email,
      subject,
      message,
    };

    fetch('https://us-central1-rodrigo-nunes.cloudfunctions.net/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then((resp) => {
      if (resp.ok) {
        scope.app.state.contactForm.buttonText = 'Sent';

        Personal.toastify.success({
          title: 'Contato enviado',
          message: `Muito obrigado \u{1F601}, retornarei o mais breve possível.`,
          timeout: 10000,
        });
  
        setTimeout(() => {
          scope.app.state.isSubmitingForm = false;
          scope.app.state.contactForm.buttonText = 'Send Message';
          evt.target.reset();
        }, 2000);
      } else {
        Personal.toastify.error({
          title: 'Erro',
          message: `Ocorreu um erro no envio do contato \u{1F622}, tente novamente em instantes.`,
          timeout: 10000,
        });
        
        console.warn(resp.statusText);
        scope.app.state.isSubmitingForm = false;
        scope.app.state.contactForm.buttonText = 'Send Message';
      }
    })
    .catch((err) => {
      Personal.toastify.error({
        title: 'Erro',
        message: `Ocorreu um erro no envio do contato \u{1F622}, tente novamente em instantes.`,
        timeout: 10000,
      });
        
      console.warn(err);
      scope.app.state.isSubmitingForm = false;
      scope.app.state.contactForm.buttonText = 'Send Message';
    });
  },
};
