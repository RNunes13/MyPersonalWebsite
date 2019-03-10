
import { home as El } from '../../Globals/globals-selectors';

export const contact = {
  submit(evt, scope) {
    evt.preventDefault();

    const name = El.$contactForm.querySelector('#name').value;
    const email = El.$contactForm.querySelector('#email').value;
    const subject = El.$contactForm.querySelector('#subject').value;
    const message = El.$contactForm.querySelector('#message').value;

    alert('Thanks for message. I\'ll return as soon as possible.');

    evt.target.reset();
  },
};
