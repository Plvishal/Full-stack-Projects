'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Button } from './ui/button';
function ContactForm() {
  const [state, handleSubmit] = useForm('xnqelvja');
  if (state.succeeded) {
    return (
      <div className=" flex justify-center items-center">
        <h1 className=" text-xl text-justify bg-clip-text text-transparent bg-gradient-to-l from-pink-300 via-red-300 to-blue-400 font-bold font-sans ">
          Thanks for showing interest on me. I try to response your message as
          soon as possible.
        </h1>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border rounded-xl p-5"
    >
      <div className="flex gap-5">
        <Input
          id="firstname"
          type="text"
          name="firstname"
          placeholder="First name"
        />
        <ValidationError
          prefix="Firstname"
          field="firstname"
          errors={state.errors}
        />
        <Input
          id="lastname"
          type="text"
          name="lastname"
          placeholder="Last name"
        />
        <ValidationError
          prefix="Lastname"
          field="lastname"
          errors={state.errors}
        />
      </div>
      <div>
        <Input id="email" type="email" name="email" placeholder="Email ID" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <Input
          id="phone"
          type="phone"
          name="phone"
          placeholder="phone number"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>
      <div>
        <Textarea
          id="message"
          name="message"
          placeholder="write something here......"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="flex justify-end items-end">
        <Button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-600 p-2 px-4 text-sm font-sans font-bold uppercase rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 hover:text-black transition-all ease-in-out "
        >
          Send Msg
        </Button>
      </div>
    </form>
  );
}
function ConatctME() {
  return <ContactForm />;
}
export default ConatctME;
