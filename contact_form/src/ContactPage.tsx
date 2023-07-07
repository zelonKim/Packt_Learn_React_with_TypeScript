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

/* // Uncontrolled fields

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
 */

///////////////////////

/* 
// React Router Form
import { Form, ActionFunctionArgs, redirect  } from "react-router-dom";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
 
  return (
    <div>
      <h2> Contact Us </h2>
      <p> If you enter your details, We`ll get back to you </p>

      <Form method="post"> 
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
      </Form>
    </div>
  );
}

// React Router action that handles part of the form submission
// React Router will pass in a 'request' object when it calls this function
export async function contactPageAction({request}: ActionFunctionArgs) {
  
  const formData = await request.formData() // get the data from the React Router`s 'request' object

  return redirect(
    `/thank-you/${formData.get('name')}`
  )
 
} */

/////////////////////////////

/* // native validation
import { Form, ActionFunctionArgs, redirect } from "react-router-dom";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  return (
    <div>
      <h2> Contact Us </h2>
      <p> If you enter your details, We`ll get back to you </p>

      <Form method="post">
        <div>
          <label htmlFor="name"> Your name </label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="email"> Your email address </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            pattern="\S+@\S+\.\S+"
          />
        </div>

        <div>
          <label htmlFor="reason"> Reason you need to contact us </label>
          <select id="reason" name="reason" required>
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
      </Form>
    </div>
  );
}


// React Router action that handles part of the form submission
// React Router will pass in a 'request' object when it calls this function
export async function contactPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData(); // get the data from the React Router`s 'request' object

  return redirect(`/thank-you/${formData.get("name")}`);
} */

/////////////////////////////


import { useForm, FieldError } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ValidationError } from "./ValidationError";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    mode: "onBlur",
    reValidateMode: "onBlur"
  });
  const navigate = useNavigate();

  function onSubmit(contact: Contact) {
    console.log(contact); // {name: 'seongjin', email: 'ksz18601@gmail.com', reason: 'Support', notes: 'hello'}
    navigate(`/thank-you/${contact.name}`); // http://localhost:3000/thank-you/seongjin
  }

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? "border-red-500" : "";
  }

  return (
    <div>
      <h2> Contact Us </h2>
      <p> If you enter your details, We`ll get back to you </p>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name"> Your name </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "You must enter your name" })}
            className={getEditorStyle(errors.name)}
          />
          <ValidationError fieldError={errors.name} />
        </div>

        <div>
          <label htmlFor="email"> Your email address </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "You must enter your email address",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            className={getEditorStyle(errors.email)}
          />
          <ValidationError fieldError={errors.email} />
        </div>

        <div>
          <label htmlFor="reason"> Reason you need to contact us </label>
          <select
            id="reason"
            {...register("reason", {
              required: "You must enter the reason for contacting",
            })}
            className={getEditorStyle(errors.reason)}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <ValidationError fieldError={errors.reason} />
        </div>

        <div>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" {...register("notes")} />
        </div>

        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  );
}
// If the form is filled, re-render does not occur. cuz, not using the state -> efficiently tracks field values
