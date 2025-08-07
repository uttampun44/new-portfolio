"use client";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "./types/contactSchema";
import { databases, ID } from "@appwrite/appwrite";
import { useRef } from "react";
import EmailJs from "@emailjs/browser";

type tContactFormType = {
  name: string;
  email: string;
  message: string;
};
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<tContactFormType>({ resolver: zodResolver(contactFormSchema) });

  const notify = () => toast("Message sent successfully!");
  const onSubmit = async (data: tContactFormType) => {

    if (data.email && data.name && data.message) {
      await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
        ID.unique(),
        {
          name: data.name,
          email: data.email,
          message: data.message,
        }
      );

      if (formRef.current) {
        EmailJs.sendForm(
          "service_z02de54",
          "mls-XN3XlB9jkl3ri",
          formRef.current,
          {
            publicKey: "mls-XN3XlB9jkl3ri",
          }
        );
      }
      notify();
      reset();
    }
  };
  return (
    <section className="mt-24">
      <div className="min-h-screen flex items-center justify-center text-white px-4">
        <div className="max-w-xl w-full space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <p className="text-gray-400 mt-2">
              Let’s build something great together.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
          >
            <div>
              <label className="block mb-1 text-sm">Your Name</label>
              <Input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="John Doe"
                {...register("name", { required: true })}
              />
              <div className="my-1">
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm ">Email Address</label>
              <Input
                type="email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="johndoe@example.com"
                {...register("email", { required: true })}
              />
              <div className="my-1">
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <Textarea
                style={{ minHeight: "100px" }}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Your message..."
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-500 my-1">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit">Submit</Button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
}
