import React,{useRef} from 'react'
import { TestimonialDetails } from '../utils/TestimonialDetails'
import { IoMdStar, IoIosArrowBack, IoIosArrowForward  } from 'react-icons/io';
import Image from 'next/image'


const StarRating = () => (
    <div className="flex">
        {Array(5).fill(null).map((_, i) => (
            <IoMdStar key={i} className="text-[#3772FF]" />
        ))}
    </div>
);

const Testimonials:React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
        }
    };
  return (
    
    <section className="bg-white py-20 shadow-lg rounded-lg  w-4xl">
            <div className="text-center mb-8">
                <h2 className="text-[40px] font-semibold text-gray-800">Our customers love us</h2>
                <p className=' font-light text-[24px] text-[#777E90]'>Read what they have to say</p>
            </div>
            <div className="relative">
                <button
                    className="absolute lg:right-20   lg:ml-[90%] lg:top-[120%] top-[50%] transform -translate-y-1/2 bg-black p-2 text-white rounded-[4px] left-0"
                    onClick={() => scroll('left')}
                >
                    <IoIosArrowBack />
                </button>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto space-x-4 px-4"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {TestimonialDetails.map((testimonial, index) => (
                        <div className="flex-shrink-0 w-80 bg-[#F9FAFB] p-4 rounded-[6px]" key={index}>
                            <div className='flex flex-row gap-[12px]'>
                                
                            <Image
                                    src={testimonial.image}
                                    alt={`Testimonial from ${testimonial.name}`}
                                    className="w-[21px] h-[21px] rounded-full mb-4"
                                    width={21}
                                    height={21}
                                />
                            <h3 className="text-[14px] font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
                            </div>
                            <p className="text-gray-700 mb-4">{testimonial.content}</p>
                            <StarRating />
                        </div>
                    ))}
                </div>
                <button
                    className="absolute lg:right-10 lg:top-[120%] top-[50%] transform -translate-y-1/2 bg-black p-2 text-white rounded-[4px] right-0"
                    onClick={() => scroll('right')}
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </section>
  )
}

export default Testimonials