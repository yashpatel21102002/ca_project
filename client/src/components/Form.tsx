import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-b from-white to-light">
      <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-2xl text-black font-bold md:text-4xl">
            WealthHub subscription gives you access to our Plan and
            more.
          </h2>
        </div>
        <div className="mt-10 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12 flex items-center flex-col justify-center">
            <div className="relative p-6 space-y-6 lg:p-8">
              <h3 className="text-3xl text-gray-700 font-semibold text-center">
                Payment
              </h3>
              <div>
                <div className="relative flex justify-around">
                  <div className="flex items-end">
                    <span className="text-7xl text-gray-800 font-bold leading-0">
                      1800
                    </span>
                    <div className="pb-2">
                      <span className="block text-xl text-gray-700 font-bold">
                        $
                      </span>
                      <span className="block text-xl text-purple-500 font-bold">
                        only
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="relative group md:w-6/12 lg:w-7/12">
            <div className=" flex items-center justify-center">
              <div className="p-6  rounded-lg w-[60%] max-lg:w-[80%] max-md:w-[95%] max-sm:w-[97%]">
                <form>
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
                  <div className="mb-6 pt-2">
                    <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                      Upload File
                    </label>

                    <div className="mb-8">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className="sr-only"
                      />
                      <label
                        htmlFor="file"
                        className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                      >
                        <div>
                          <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                            Drop files here
                          </span>
                          <span className="mb-2 block text-base font-medium text-[#6B7280]">
                            Or
                          </span>
                          <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                            Browse
                          </span>
                        </div>
                      </label>
                    </div>
                    </div>

                    
                  <button
                    type="submit"
                    className="w-24 bg-white p-2 rounded-lg hover:bg-[black]-[black] transition-colors duration-300 focus:outline-none"
                  >
                    Pay
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
