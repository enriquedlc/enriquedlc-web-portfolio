import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { mainStyles } from "../styles/mainStyles";

import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas/Earth";

import credentials from "../credentials.json";

import { slideIn } from "../utils/motion";
import { toast } from "sonner";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      toast.info("Sending message...");

      emailjs
        .send(
          credentials.emailjs.SERVICE_ID,
          credentials.emailjs.TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Enrique",
            from_email: form.email,
            to_email: credentials.emailjs.TO_EMAIL,
            message: form.message,
          },
          credentials.emailjs.PUBLIC_KEY,
        )
        .then(
          () => {
            setLoading(false);
            toast.success("Message sent successfully!");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            toast.error("Something went wrong, please try again later.");
          },
        )
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={
        "xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
      }
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={mainStyles.sectionSubText}>Get in touch</p>
        <h3 className={mainStyles.sectionHeadText}>Contact me.</h3>
        <form
          action="submit"
          // @ts-ignore
          ref={formRef}
          onSubmit={(e) => handleSubmit(e)}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your name</span>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg font-medium"
            />
          </label>
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your email</span>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg font-medium"
            />
          </label>
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your message</span>
            <textarea
              id="message"
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none rounded-lg font-medium min-h-[150px]"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white text-bold shadow-md shadow-primary rounded-lg"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
