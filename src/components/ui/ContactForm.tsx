import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { inputFields } from "../../data/recipes";





const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [submissionStatus, setSubmissionStatus] = useState<"submitNow" | "submitting" | "submitted">("submitNow");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setSubmissionStatus("submitting");

    emailjs.sendForm('service_3enyp94', 'template_58eqzje', form.current, 'ZM_l5RHz-XAPu2mYN')
      .then((result) => {
        if (result.status === 200) {
          setSubmissionStatus("submitted");
          toast.success("Your mail has been successfully submitted.");
        }
        if (form.current) {
          form.current.reset(); // Reset the form
        }
      }, (error) => {
        setSubmissionStatus("submitNow"); 
        toast.error(error.text); 
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {inputFields?.map((inputField, index) => (
          <React.Fragment key={index}>
            {inputField.type === "textarea" ? (
              <textarea
                rows={5}
                className="px-4 py-3 border-b w-full outline-none text-xl rounded"
                placeholder={inputField.placeholder}
                name={inputField.name}
                required={inputField.required}
              />
            ) : (
              <input
                type={inputField.type}
                name={inputField.name}
                className="px-4 py-3 border-b w-full outline-none text-xl rounded"
                placeholder={inputField.placeholder}
                pattern={inputField.pattern}
                title={inputField.title}
                required={inputField.required}
              />
            )}
          </React.Fragment>
        ))}
        <input
          type="submit"
          className={`px-4 py-3 bg-orange-500  tracking-widest text-white w-full  outline-none text-lg rounded cursor-pointer hover:bg-white hover:border hover:border-orange-500 hover:text-orange-500 transition-all duration-500 delay-500 ${
            submissionStatus === "submitting" && "opacity-50 pointer-events-none"
          }`}
          value={
            submissionStatus === "submitNow"
              ? " Submit Now"
              : submissionStatus === "submitting"
              ? "Submitting..."
              : submissionStatus === "submitted"
              ? "Submitted"
              : "Again Submit"
          }
          disabled={submissionStatus === "submitting"}
        />
      </form>
    </div>
  );
};

export default ContactForm;
