"use client";

import { useForm } from "react-hook-form";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

type FormData = { name: string; email: string; message: string };

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data); // Replace with real submission

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <Input label="Name" {...register("name", { required: true })} error={errors.name} />
          <Input label="Email" type="email" {...register("email", { required: true })} error={errors.email} />
          <Input label="Message" as="textarea" {...register("message", { required: true })} error={errors.message} />
          <Button type="submit" variant="primary">Send</Button>
        </form>
      </div>
    </section>
  );
}
