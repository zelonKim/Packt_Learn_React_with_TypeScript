//Controlled fileds

/* import { useState, FormEvent } from "react";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    reason: "",
    notes: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submitted details:", contact);
  }

  return (
    <div>
      <h2> Contact Us </h2>
      <p> If you enter your details, We`ll get back to you </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Your name </label>
          <input
            type="text"
            id="name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email"> Your email address </label>
          <input
            type="email"
            id="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="reason"> Reason you need to contact us </label>
          <select
            id="reason"
            value={contact.reason}
            onChange={(e) => setContact({ ...contact, reason: e.target.value })}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes">Additional notes</label>
          <textarea
            id="notes"
            value={contact.notes}
            onChange={(e) => setContact({ ...contact, notes: e.target.value })}
          />
        </div>

        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  );
}
// every time a character is entered into a field, a state change occurs, which re-renders the whole form.
*/

///////////////////////

// Uncontrolled fields

import { FormEvent } from "react";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const contact = {
      name: formData.get("name"),
      email: formData.get("email"),
      reason: formData.get("reason"),
      notes: formData.get("notes"),
    } as Contact;

    console.log("Submitted details:", contact);
  }

  return (
    <div>
      <h2> Contact Us </h2>
      <p> If you enter your details, We`ll get back to you </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Your name </label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="email"> Your email address </label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="reason"> Reason you need to contact us </label>
          <select id="reason" name="reason">
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" name="notes" />
        </div>

        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  );
}
// even if the form is filled, the re-render never occurs. cuz, there is no longer any state.
