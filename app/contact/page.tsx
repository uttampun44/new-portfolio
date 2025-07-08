
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";


type tContactFormType = {
  name: string;
  email: string;
  message: string;
}
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tContactFormType>();

  const notify = () => toast("Message sent successfully!");
  const onSubmit = (data: tContactFormType) => {
    console.log(data);
    notify();
  };
  return (
    <section className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="text-gray-400 mt-2">
            Let’s build something great together.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
              required
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
            {
              errors.message && (
                <p className="text-red-500 my-1">{errors.message.message}</p>
              )
            }
          </div>

          <Button type="submit">Submit</Button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
}
