
/* eslint-disable indent */
import { home as El } from '../../Globals/globals-selectors';
import { database } from '../../../utils/firebase';

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
      name,
      email,
      subject,
      message,
    };

    database.add('contacts', data)
    .then((docRef) => {
        scope.app.state.contactForm.buttonText = 'Sent';
        alert(`Thanks for message \u{1F601}. I\'ll return as soon as possible...\n\nIf you need, this is ID for your contact: ${docRef.id}.`);

        setTimeout(() => {
          scope.app.state.isSubmitingForm = false;
          scope.app.state.contactForm.buttonText = 'Send Message';
          evt.target.reset();
        }, 2000);
      })
      .catch((err) => {
        alert(`Something went wrong \u{1F622}, try again soon.`);

        console.warn(err);
        scope.app.state.isSubmitingForm = false;
        scope.app.state.contactForm.buttonText = 'Send Message';
      });
  },
};
