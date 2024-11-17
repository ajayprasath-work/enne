import { Close } from "@/public/assets/icon/Icon";
import React, { useState } from "react";

interface ContactProps {
  openVal: () => void;
}
interface formData {
  name: string;
  email: string;
  phone: string;
  remark:string;
}
interface formErrors {
  name: string;
  email: string;
  phone: string;
  remark:string;
}

function ContactModal({ openVal }: ContactProps) {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    phone: "",
    remark:"",
  });
  const [errors, setErrors] = useState<formErrors>({
    name: "",
    email: "",
    phone: "",
    remark:"",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validateForm = () => {
    let isValid = true;
    let newErrors: formErrors = { name: "", email: "", phone: "" ,remark:""};

    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    const { name, value } = e.target;
    if(value) {
      setErrors ({...errors,[name]:""});

    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({ name: "", email: "", phone: "",remark:"" });
      setSuccessMessage("Form submitted successfully!");

      setTimeout(() => {
        setSuccessMessage(null);
        openVal();
      }, 5000);
    }
  };
  const handleCloseSuccessMessage = () => {
    setSuccessMessage(null);
  };
  return (
    <>
      <div
        className={`fixed z-[100] w-full h-screen top-0 flex justify-center items-center backdrop-blur-md bg-black bg-opacity-50`}
      >
        <div className="w-[32rem] bg-paragraph relative py-16 rounded-2xl px-10">
          <div
            className="top-5 right-5 absolute hover:text-secondary cursor-pointer"
            onClick={openVal}
          >
            <Close width={30} height={30} />
          </div>
          <div className="text-5xl text-center font-bold tracking-xxl text-white">
            Contact us
          </div>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-gray-220 text-base font-normal tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`outline-none focus:border-secondary duration-300 text-white bg-primary py-3 px-5 border  border-gray-230  rounded-40 placeholder:text-gray-230 placeholder:text-sm placeholder:font-medium ${
                  errors.name ? "!border-red-500" : ""
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <label
                htmlFor="email"
                className="text-gray-220 text-base font-normal tracking-wider"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                className={`outline-none focus:border-secondary duration-300 text-white bg-primary py-3 px-5 border  border-gray-230  rounded-40 placeholder:text-gray-230 placeholder:text-sm placeholder:font-medium ${
                  errors.email ? "!border-red-500" : ""
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <div className="mt-1 text-red-500 text-sm">{errors.email}</div>
              )}
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <label
                htmlFor="phone"
                className="text-gray-220 text-base font-normal tracking-wider"
              >
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={handleInputChange}
                value={formData.phone}
                className={`outline-none focus:border-secondary duration-300 text-white bg-primary py-3 px-5 border  border-gray-230  rounded-40 placeholder:text-gray-230 placeholder:text-sm placeholder:font-medium ${
                  errors.phone ? "!border-red-500" : ""
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <div className="mt-1 text-red-500 text-sm">{errors.phone}</div>
              )}
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <label
                htmlFor="remarks"
                className="text-gray-220 text-base font-normal tracking-wider"
              >
                Remarks
              </label>
                <textarea cols={10} rows={3}  onChange={handleInputChange} placeholder="Enter your Message" id="remark"   name="remark" value={formData.remark} className={`outline-none focus:border-secondary duration-300 text-white bg-primary py-3 px-5 border  border-gray-230  rounded-40 placeholder:text-gray-230 placeholder:text-sm placeholder:font-medium `}></textarea>
           
            </div>
            <div className="mt-16 flex justify-end">
              <button
                type="submit"
                className="w-fit text-base font-medium inline-block text-paragraph py-2.5 px-5 tracking-4xl bg-secondary rounded-5xl transition-all duration-500 hover:shadow-xxl"
              >
                Book now
              </button>
            </div>
          </form>
        </div>
      </div>
      {successMessage && (
        <div className="fixed z-[150] flex justify-center items-center w-full h-screen backdrop-blur-sm bg-black bg-opacity-50">
          <div className="px-10 w-[30rem] py-14 relative rounded-40 text-center text-3xl font-semibold text-white bg-paragraph"> 
          Thank you for contacting us! We will get back to you soon!
          <button  onClick={handleCloseSuccessMessage} className="top-5 right-5 text-white absolute">
          <Close width={30} height={30} />
          </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactModal;
