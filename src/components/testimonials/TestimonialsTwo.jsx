import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: `“Competently network seamless catalysts for change with world-class bandwidth. Professionally e-enable enterprise-wide processes and 2.0 leadership. Main unleash reliable process improvements“`,
    name: "David D. Mitchell",
    role: "Senior Manager",
    avatar: "/assets/images/testimonials-avatar-1.png",
  },
  {
    text: `“Holisticly promote adaptive alignments rather than client-centric paradigms. Objectively seize multidisciplinary solutions after B2C methods.“`,
    name: "Amanda W. Stone",
    role: "Marketing Head",
    avatar: "/assets/images/testimonials-avatar-2.png",
  },
  {
    text: `“Quickly unleash collaborative channels rather than tactical initiatives. Progressively maintain sustainable ROI through quality interfaces.“`,
    name: "William C. Brown",
    role: "Product Designer",
    avatar: "/assets/images/testimonials-avatar-3.png",
  },
];

const TestimonialsTwo = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 items-center">
          <div className="md:pr-10 lg:pr-20">
            <img
              className="object-cover w-full"
              src="/assets/images/testimonials-5.png"
              alt="Testimonial"
            />
          </div>

          <div>
            <span className="subtitle2">
              Testimonial
            </span>

            <div className="flex justify-between items-center gap-4">
              <h2 className="title2-black text-3xl font-bold mb-4">
                Clients Testimonial
              </h2>

              <div className="flex gap-4 mb-6">
                <button
                  ref={prevRef}
                  className="w-10 h-10 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  <ArrowLeft />
                </button>
                <button
                  ref={nextRef}
                  className="w-10 h-10 cursor-pointer rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>

            <p className="text text-dark-gray mb-10">
              Compellingly harness an expanded array of leadership for extensive
              mindshare. Seamlessly visualize functionalized imperatives.
            </p>

            <div className="">
              {/* Swiper Slider */}
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative bg-[url('/assets/images/testimonials-2-bg.png')] bg-cover bg-no-repeat pt-8 rounded-2xl">
                      <div className="quote-icon relative mb-8 ml-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 56 57"
                          fill="none"
                        >
                          <path
                            d="M8.6575 26.5204V22.6888C8.6575 18.7761 11.8299 15.6043 15.7426 15.6043H18.3601C19.3225 15.6043 20.2455 15.222 20.926 14.5414C21.6065 13.8609 21.9889 12.9379 21.9889 11.9755C21.9889 11.0131 21.6065 10.0901 20.926 9.40953C20.2455 8.729 19.3225 8.34668 18.3601 8.34668H15.7437C7.82198 8.34612 1.3999 14.7676 1.3999 22.6894V45.3604C1.3999 46.3229 1.78222 47.2459 2.46275 47.9264C3.14329 48.6069 4.06628 48.9892 5.0287 48.9892H20.2405C20.7171 48.9892 21.189 48.8954 21.6292 48.713C22.0695 48.5307 22.4695 48.2634 22.8065 47.9264C23.1435 47.5894 23.4108 47.1894 23.5931 46.7491C23.7755 46.3089 23.8693 45.837 23.8693 45.3604V30.1497C23.8693 29.6732 23.7755 29.2013 23.5931 28.761C23.4108 28.3208 23.1435 27.9207 22.8065 27.5838C22.4695 27.2468 22.0695 26.9795 21.6292 26.7971C21.189 26.6148 20.7171 26.5209 20.2405 26.5209L8.6575 26.5204ZM39.3881 26.5204V22.6888C39.3881 18.7761 42.5605 15.6043 46.4732 15.6043H49.0906C50.053 15.6043 50.976 15.222 51.6566 14.5414C52.3371 13.8609 52.7194 12.9379 52.7194 11.9755C52.7194 11.0131 52.3371 10.0901 51.6566 9.40953C50.976 8.729 50.053 8.34668 49.0906 8.34668H46.4743C38.5525 8.34668 32.1305 14.7682 32.1305 22.69V45.3604C32.1305 46.3229 32.5128 47.2459 33.1933 47.9264C33.8738 48.6069 34.7968 48.9892 35.7593 48.9892H50.9711C51.9335 48.9892 52.8565 48.6069 53.5371 47.9264C54.2176 47.2459 54.5999 46.3229 54.5999 45.3604V30.1497C54.5999 29.1873 54.2176 28.2643 53.5371 27.5838C52.8565 26.9032 51.9335 26.5209 50.9711 26.5209L39.3881 26.5204Z"
                            fill="#0E0F11"
                          />
                        </svg>
                      </div>

                      {/* Responsive padding here */}
                      <div className="px-10 md:10 xl:px-30 -mb-5">
                        <p className="text text-gray-600">
                          “Competently network seamless catalysts for change with
                          world-class bandwidth. Professionally e-enable enterprise-wide
                          processes and 2.0 leadership. Main unleash reliable process
                          improvements“
                        </p>
                        <div className="mt-10 space-y-2 pb-8 md:pb-0">
                          <p className=" font-semibold text-xl leading-primary text-gray-800">David D. Mitchell</p>
                          <p className="text-base font-normal leading-normal text-gray-500">Senior Manager</p>
                        </div>
                      </div>

                      <div className="px-4 md:pt-4 rounded-full mt-4 md:mt-8">
                        <img className="object-cover"
                          src="/assets/images/testimonials-avatar-1.png"
                          alt="Avatar" />
                      </div>

                      <img className="absolute bottom-10 right-8" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTwo;



