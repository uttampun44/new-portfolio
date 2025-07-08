import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup 
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required()


export default function Contact() {

  const {register, handleSubmit} = useForm({resolver: yupResolver(schema)});

  const onSubmit = (data: any) => {
    console.log(data);
  }
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
            <Label className="block mb-1 text-sm">
              Your Name
            </Label>
            <Input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
          </div>

          <div>
            <Label className="block mb-1 text-sm ">
              Email Address
            </Label>
           <Input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="johndoe@example.com"
              required
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <Label className="block mb-1 text-sm">Message</Label>
            <Textarea
              style={{ minHeight: "100px" }}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Your message..."
              {...register("message", { required: true })}
            />
          </div>

         <Button
          type="submit"
          >Submit</Button>
        </form>
      </div>
    </section>
  );
}
