
export default function Home() {
  return (
    <div className="gap-y-10 md:pt-0 pt-10 space-y-29">
      {/* hero section */}
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-2 sm:px-6 sm:py-12 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left -translate-y-4 flex flex-col md:items-start items-center">
            {/* title */}
            <h1 className="text-4xl font-bold text-gray-700 md:text-5xl text-center md:text-left">
              Lessons and insights
              <strong className="main-color"> from 8 years </strong>
            </h1>
            {/* paragraphe */}
            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>
            {/* btn s */}
            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded-xl border main-bgcolor px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* img */}
          <img
            src="/web imgs/hero img.png"
            alt="hero img"
            className="mx-auto hidden h-100 max-w-md text-gray-900 md:block"
          />
        </div>
      </section>

      {/* firist div */}

      <div className="hidden flex-col justify-center items-center px-30 gap-y-5 md:flex">
        <div className="flex flex-col justify-center items-center gap-y-1">
          <h1 className="text-4xl font-bold">Our Clients</h1>
          <p className="text-xl text-gray-700">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <img src="/web imgs/companes.png" alt="companes" className="" />
      </div>

      {/* second div */}

      <div className=" justify-center items-center px-30 space-y-10">
        <div className="flex flex-col justify-center items-center gap-y-1">
          <h1 className="text-4xl text-center font-bold">
            Manage your entire community in a single system
          </h1>
          <p className="text-xl text-center text-gray-700">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-around">
          <div className="flex flex-col justify-center p-4 text-center items-center rounded-2xl w-70 gap-y-7">
            <img src="/web imgs/Icon.png" alt="icon" className="h-15" />
            <h1 className="text-xl font-bold">Membership Organisations</h1>
            <p className="text-gray-700">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className="flex flex-col justify-center p-4 text-center items-center rounded-2xl w-70 gap-y-7">
            <img src="/web imgs/Icon.png" alt="icon" className="h-15" />
            <h1 className="text-xl font-bold">Membership Organisations</h1>
            <p className="text-gray-700">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className="flex flex-col justify-center p-4 text-center items-center rounded-2xl w-70 gap-y-7">
            <img src="/web imgs/Icon.png" alt="icon" className="h-15" />
            <h1 className="text-xl font-bold">Membership Organisations</h1>
            <p className="text-gray-700">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>

      {/* third div */}

      <div className="flex justify-around h-fit flex-col md:flex-row md:mb-10 mb-50">
        <img
          src="/web imgs/undraw1.png"
          alt="undrow1"
          className="md:h-100 h-150 object-cover mb-30"
        />
        <div className="max-w-prose text-left px-5 -translate-y-4 flex flex-col md:items-start items-center justify-center ">
          {/* title */}
          <h1 className="text-3xl font-bold text-center md:text-left text-gray-700 md:text-4xl">
            The unseen of spending three years at Pixelgrade
          </h1>
          {/* paragraphe */}
          <p className="mt-4 text-base text-pretty text-center md:text-left text-gray-700 sm:text-lg/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          {/* btn s */}
          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded-xl border main-bgcolor px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* div 4 */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row justify-center items-center md:justify-between gap-10 md:gap-0 py-10 bg-color">
        {/* النص */}
        <div className="flex flex-col justify-center text-center md:text-left max-w-md">
          <h1 className="text-2xl font-bold text-gray-700 md:text-3xl leading-snug">
            Helping a local
            <strong className="main-color block">
              business reinvent itself
            </strong>
          </h1>
          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* الأرقام */}
        <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-x-12 w-full md:w-[45%]">
          <div className="flex items-center justify-center gap-4">
            <img src="/web imgs/Icon2.png" alt="icon" className="h-8" />
            <div>
              <h1 className="font-bold text-xl">2,245,341</h1>
              <p className="text-gray-700">Members</p>
            </div>
          </div>
          <div className="flex items-center  justify-center -translate-x-5 gap-4">
            <img
              src="/web imgs/Icon (1).png"
              alt="icon"
              className="h-8 scale-150"
            />
            <div>
              <h1 className="font-bold text-xl">4,251</h1>
              <p className="text-gray-700">Clubs</p>
            </div>
          </div>
          <div className="flex items-center justify-center  gap-4">
            <img src="/web imgs/Icon (2).png" alt="icon" className="h-8" />
            <div>
              <h1 className="font-bold text-xl">5,258,285</h1>
              <p className="text-gray-700">Event Bookings</p>
            </div>
          </div>
          <div className="flex items-center justify-center  gap-4">
            <img src="/web imgs/Icon (3).png" alt="icon" className="h-8" />
            <div>
              <h1 className="font-bold text-xl">8,154,341</h1>
              <p className="text-gray-700">Payments</p>
            </div>
          </div>
        </div>
      </div>

      {/* div 5 */}

      <div>
        {/* العنوان والفقره */}
        <div className="flex flex-col justify-center items-center gap-y-4 mb-16 px-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Caring is the new marketing
          </h1>
          <p className="text-base md:text-xl text-gray-700 max-w-2xl">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20">
          <div className="bg-color rounded-2xl flex flex-col gap-4 shadow-2xl justify-center items-center p-6">
            <h1 className="text-gray-700 text-lg md:text-xl text-center">
              Creating Streamlined Safeguarding Processes with OneRen
            </h1>
            <hr className="w-full border main-color" />
            <a href="/" className="flex gap-2 items-center main-color">
              Readmore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </a>
          </div>

          <div className="bg-color rounded-2xl flex flex-col gap-4 shadow-2xl justify-center items-center p-6">
            <h1 className="text-gray-700 text-lg md:text-xl text-center">
              Creating Streamlined Safeguarding Processes with OneRen
            </h1>
            <hr className="w-full border main-color" />
            <a href="/" className="flex gap-2 items-center main-color">
              Readmore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </a>
          </div>

          <div className="bg-color rounded-2xl flex flex-col gap-4 shadow-2xl justify-center items-center p-6">
            <h1 className="text-gray-700 text-lg md:text-xl text-center">
              Creating Streamlined Safeguarding Processes with OneRen
            </h1>
            <hr className="w-full border main-color" />
            <a href="/" className="flex gap-2 items-center main-color">
              Readmore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* end */}
      <div></div>
    </div>
  );
}
