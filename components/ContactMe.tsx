import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  content: string;
};

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  //state
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    console.log(JSON.stringify(formData));
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        
      });

      const result = await response.json();

      setIsLoading(false);
      if (!response.ok) {
        console.log("error sending email:", result);
      } else {
        reset();
        toast.success("I have received your message!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("ok");
      }
      return result;
    }
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-10 uppercase tracking-widest text-teal-400 text-2xl ">
        Contact
      </h3>
      <div className="md:top-52 flex-col space-y-10">
        <h4 className="  text-xl md:text-2xl lg:text-4xl font-semibold text-center">
          I have got just what you need?{" "}
          <span className=" decoration-teal-500/50 underline">
            Let &lsquo;s Talk{" "}
          </span>
        </h4>

        <div>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-teal-500 h-7 w-7 animate-pulse" />
            <p className=" text-base md:text-2xl">+261 34 25 698 79</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-teal-500 h-7 w-7 animate-pulse" />
            <p className=" text-base md:text-2xl">
              {" "}
              arotianarandrianasolo@yahoo.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-teal-500 h-7 w-7 animate-pulse" />
            <p className="text-base md:text-2xl">
              {" "}
              0116 F 12 Avaratsena, Antsirabe, Madagascar
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-11/12 md:w-auto mx-auto "
        >
          <div className=" flex space-x-2">
            <input
              {...register("name", { required: true })}
              id="name"
              placeholder="Name"
              className="contactInput w-1/3"
              type="text"
            />
            {errors.name && (
              <p className="text-yellow-400">Please,enter your name</p>
            )}
            <input
              {...register("email", { required: true })}
              id="email"
              placeholder="Email"
              className="contactInput w-2/3"
              type="email"
            />
            {errors.email && (
              <p className="text-yellow-400">Please, enter your email</p>
            )}
          </div>

          <input
            {...register("subject")}
            id="subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("content", { required: true })}
            id="content"
            placeholder="Message"
            className="contactInput"
          />
          {errors.content && (
            <p className="text-yellow-400">
              You may have forget to write your message
            </p>
          )}
          {!isLoading && (
            <button
              type="submit"
              className="bg-teal-500 py-5 px-10 rounded-md text-white font-bold text-lg"
            >
              Submit
            </button>
          )}
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
