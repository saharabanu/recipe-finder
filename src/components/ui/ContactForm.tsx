/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

interface FormData {
  from_name: string;
  from_email: string;
  from_con: string;
  message: string;
}

const ContactForm: React.FC = () => {
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
          toast.success("আপনার মেইলটি সফলভাবে জমা হয়েছে ।");
        }
      }, (error) => {
        setSubmissionStatus("submitNow"); 
        toast.error(error.text); 
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="from_name"
          className="px-4 py-3 border-b w-full outline-none text-xl rounded "
          placeholder=" Your Name*"
          required
        />
        <input
          type="text"
          className="px-4 py-3 border-b w-full outline-none text-xl rounded "
          placeholder="Your email *"
          name="from_email"
          required
        />
        <input
          type="text"
          className="px-4 py-3 border-b w-full outline-none text-xl rounded "
          placeholder="Your Contact Number *"
          name="from_con"
          pattern="^01\d{9}$" 
          title="Mobile Number must be 11 number like 01742561023"
          required
        />
        <textarea
          rows={5}
          className="px-4 py-3 border-b w-full outline-none text-xl rounded "
          placeholder="Your Message *"
          name="message"
          required
        />
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
              : "Submitted"
          }
          disabled={submissionStatus === "submitting"}
        />
      </form>
    </div>
  );
};

export default ContactForm;
