import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "BigO - Contact",
};

const ContactUs = () => {
  return (
    <Suspense fallback={<Loading />}>
      <section className="h-full lg:h-screen lg:max-h-[850px] py-20 bg-custom-purple-700 grid place-items-center relative">
        <div className="container z-50 px-8 sm:px-10 lg:px-20 flex items-center gap-10 lg:gap-32 justify-between flex-col lg:flex-row">
          <div className="text-white lg:max-w-2xl space-y-4">
            <strong className="uppercase">Connect</strong>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Get in Touch With BigO - Your Partner in Excellence
            </h1>
            <p className="">
              Whether you wish to dominate the digital arena by employing the
              latest business solutions or have queries regarding our services,
              our team at BigO is here to serve you. Your success is our
              victory, and we are excited to talk about how we might adapt our
              offerings to suit your particular requirements.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="p-2 bg-custom-purple-300/50 rounded-md">
                <MdEmail size={25} className="text-white" />
              </span>

              <div>
                <h5 className="text-lg font-bold text-white">Email</h5>
                <Link
                  className="text-white hover:text-custom-purple-100 transition-all duration-200"
                  href="mailto:info@BigO.com"
                >
                  info@BigO.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="p-2 bg-custom-purple-300/50 rounded-md">
                <FaPhoneAlt size={25} className="text-white" />
              </span>

              <div>
                <h5 className="text-lg font-bold text-white">Phone</h5>
                <Link
                  className="text-white hover:text-custom-purple-100 transition-all duration-200"
                  href="tel:+923165143252"
                >
                  +92 316 514 3252
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="p-2 bg-custom-purple-300/50 rounded-md">
                <FaLocationDot size={25} className="text-white" />
              </span>

              <div>
                <h5 className="text-lg font-bold text-white">Office</h5>
                <Link
                  className="text-white hover:text-custom-purple-100 transition-all duration-200"
                  href="https://maps.app.goo.gl/2L9f9WYFS6Anjjg39"
                  target="_blank"
                >
                  First Floor, Plaza #54, Sector F, DHA Phase 1, Rawalpindi
                </Link>
              </div>
            </div>

            <p className="text-white/50">
              At BigO, communication is key, and we are excited to hear from
              you. Let&apos;s make big things happen together!
            </p>
          </div>
        </div>
        <Image
          src="/contact-bg.png"
          alt=""
          fill={true}
          className="object-cover md:object-contain"
        />
      </section>
    </Suspense>
  );
};

export default ContactUs;
