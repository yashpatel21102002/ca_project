import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-10 min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white shadow-md rounded-lg w-[40%] max-lg:w-[80%] max-md:w-[95%] max-sm:w-full">
        <h2 className="text-2xl text-[black] text-lg sm:text-2xl mb-4">
          Contact Us
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-[black] text-sm sm:text-base font-semibold">
              Your Name
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-lg border border-[black] text-sm sm:text-base focus:outline-none focus:border-[black]"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[black] text-sm sm:text-base font-semibold">
              Contact
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-lg border border-[black] text-sm sm:text-base focus:outline-none focus:border-[black]"
              placeholder="Contact"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[black] text-sm sm:text-base font-semibold">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 rounded-lg border border-[black] text-sm sm:text-base focus:outline-none focus:border-[black]"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[black] text-sm sm:text-base font-semibold">
              Subject
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-lg border border-[black] text-sm sm:text-base focus:outline-none focus:border-[black]"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[black] text-sm sm:text-base font-semibold">
              Description or Queries
            </label>
            <textarea
              className="w-full p-2 rounded-lg border border-[black] text-sm sm:text-base focus:outline-none focus:border-[black]"
              placeholder="Description or Queries"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-24 bg-[black] text-white p-2 rounded-lg hover:bg-[black]-[black] transition-colors duration-300 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
