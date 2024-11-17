"use client";
import { Leftarrow, Quotes, Rightarrow, Star } from "@/public/assets/icon/Icon";
import React, { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useI18n, useScopedI18n } from '@/locales/client'
type TestimonialItem = {
  title: string;
  description: string;
  clientName: string;
  role?: string;
};

function Testimonial() {
  const swiperRef = useRef<SwiperRef>(null);
  const tIndex = useScopedI18n("IndexPage");
  const [currentIndex, setCurrentIndex] = useState(0);
  const tTestimonials = useScopedI18n("Testimonials");
  const Test: TestimonialItem[] = [
    {
      title: "What our customer says",
      description:
        "Earlier this year, I was facing some challenges managing my relationships with some of my business partners. Although I have only met Cindy once at an event, she was the first person that came to my mind when it comes to fixing relationships. I approached Cindy on a short notice and she pushed away her appointments to offer a listening ear. She seems to have that instinct to be able to understand people and their situation, and I felt much better after just speaking to her. Subsequently, I had a few coaching sessions with her to discover more about myself and explore ways to better manage the people around me, based on the principles of Enneagram. The sessions were very insightful. They not just helped me resolve my issues, but also prepare me for possible conflicts that may arise in the future. I feel more equipped and confident in managing my growing businesses and my team. Cindy has shown to be a passionate, dedicated and sincere coach. She is in the business, not just for money, but she is genuinely interested in people and want to see them fulfilled and be successful in life. I’m sure that she has truly impacted many lives for the better thanks to what she does.",
      clientName: "Eric Lew",
      role: "Executive Director",
    },
    {
      title: "What our customer says",
      description:
        "I’d strongly recommend Enneagram to any businesses or anyone who deals with people, to improve team bonding, communication and their business in the long run.",
      clientName: "Dr. Elias Tam",
      role: "EHA Clinic",
    },
    {
      title: "What our customer says",
      description:
        "Cindy’s coaching approach is warm and intelligent combined with a strong knowledge of personality styles and tools. In a single session she helped me gain a better understanding of myself and my girlfriend. Cindy offers practical knowledge with information you can apply immediately.",
      clientName: "Dr. B.",
      role: "Psychologist",
    },
    {
      title: "What our customer says",
      description:
        "As the Director of a premier agency, I am acutely aware about the importance of good team dynamics in the workplace. I needed a trainer and a programme that could help my team understand each other better and also improve productivity at work. Cindy was just the right person for the task. In fact, she more than exceeded our expectations. She didn’t just teach us about the Enneagram. Instead, she very quickly understood our organisation’s needs and deftly crafted the session in an angle that would be most meaningful and useful for me and my team. Since her training, I’ve seen visible and measurable improvements in my team’s performance. Overall, the percentage of sales has gone up by 20%, and the team reports that they understand their clients (and even their spouse) so much better now. I believe that the kind of services that Cindy is offering is currently at the Early Adopters’ stage and the uptake for the Enneagram as a tool for understanding people’s motivations can only grow from here on out. I hope that others who are keen on EQ-development will be able to benefit from the good service and good work that she is currently offering.",
      clientName: "Christopher Ong",
      role: "Agency Director",
    },
    {
      title: "What our customer says",
      description:
        "Cindy is a very frank and genuine love coach. Before meeting her, I have issues with my confidence level. I could not express myself and I was not sure what are the qualities I want in a life partner. After Cindy’s coaching, I am now more confident in expressing my feelings, my likes and dislikes. I learnt the soft skills and communication skills, and I began to understand the mentality of women. I now know myself better, and I am clearer in the qualities I want in a life partner. Thank you Cindy, I have put what you’ve taught me into good use and I’m now happily dating!",
      clientName: "Mr Chow",
      role: "Civil Servant",
    },
    {
      title: "What our customer says",
      description:
        "Cindy shared with me all the findings of my Enneagram Report and that has helped me to become more productive and have better relationships between me and my clients, family and my friends. I’ll strongly recommend Cindy and Enneagram to anyone who wants to improve themselves, not only in their business but also in their personal and interpersonal relationships.",
      clientName: "Brian Lee",
      role: "Be The Voice, Voice Coach",
    },
    {
      title: "What our customer says",
      description:
        "Cindy simply changed me inside out. As an engineer, I am really bad when it comes to understanding women’s needs and bringing out a higher value in me. Cindy was able to discover my strengths and she has greatly encouraged me to take a step of faith on work on my weaknesses. She is an all rounded coach who looks at the entire well-being of my personal growth, more than trying to make a buck out of me. As a whole, I became more confident in my public speaking, which had helped me becoming a more charismatic leader at work. I have also got myself a very beautiful and capable girlfriend which I never thought was possible before. My colleagues and family members are very overwhelmed with my complete change for the better. Money well spent!",
      clientName: "Wai C.",
      role: "IT Engineer",
    },
    {
      title: "What our customer says",
      description:
        "Before attending the Enneagram Workshop, I was struggling with understanding why I cannot seem to get along with my husband, and always giving in with others easily. I had issues relaxing, and could not draw boundaries about my work and life. After attending the workshop and 1-1 session with Cindy, I have learnt that all of my behavior is a part of me where I might have a tendency to be worked up over small things. Cindy has thought me how to complement my husband better with my strengths! Now, I have learnt how to strike a balance between my work and life Enneagram has helped me to better understand myself, my strengths, my weaknesses and how I can better myself. I can now look towards greater growth because I know where to improve, and how to improve! Thanks, Cindy and Relationship Studio for this!",
      clientName: "Ms H.",
      role: "Business Owner",
    },
    {
      title: "What our customer says",
      description:
        "Cindy conducted an Enneagram training for my team on how to build relationship with the 9 different types of personality. She also did multiple 1-to-1 and small group sessions with individuals in the team and to our amazement and delight, our team dynamics and productivity have improved significantly in just 2 months! Team dynamics has hence seen a drastic improvement as members have become more understanding and accepting of one another’s behaviour, there is less conflicts and individuals can now resolve misunderstandings between themselves more peacefully and efficiently. Productivity has definitely gone up! For those who have coaching with Cindy, there is a significant growth of up to 300% in activity rate, from not being active for an entire week, to working up to 7 days a week. Sales figures have gone up, and these individuals are more driven, and independent, easier to manage as they are more responsible and accountable. I would highly recommend Cindy’s Enneagram Team Bonding program and productivity coaching to sales teams!",
      clientName: "James Tan",
      role: "Great Eastern",
    },
    {
      title: "What our customer says",
      description:
        "Cindy has come up with a meaningful 2-day programme for my company’s management retreat. Through her Enneagram Profiling workshop, the team is now able to learn about their leadership styles, and how they can work with team members of other personality types. In addition, during the 1-to-1 consultation with Cindy, they were made aware of their blindspots and areas that they could improve on. Also, the team is now clear about our company’s vision, mission and values, and how they play a part in fulfilling it. This has definitely increased staff morale and brought everyone closer together. This wouldn’t be possible without Cindy’s dedication and passion in what she does. Cindy is an effective coach, and I would definitely recommend business owners to engage her for her team bonding or coaching services.",
      clientName: "Alvin Poh",
      role: "CEO, Vodien Internet Solutions",
    },
    {
      title: "What our customer says",
      description:
        "Just attended the 2 day Level 1 Enneagram course over the weekend guided by Vivien and Cindy. It has been hugely insightful as we learnt about all 9 types. Coupled with the sharing from individuals of the respective types it made learning even more comprehensive as we delve into the thought processes of the various types for the various aspects of their lives. Originally, I was really signing up just to know more about myself and for use in personal relationships. At the end of the course, I concluded I would use this for all aspects of my life. I could use it to better working relationships even. It’s funny because we spent so much time complaining about why some people do things the way they do but it’s refreshing to actually know that they were guided by something that could be classified under a type. I would believe the earlier you are expose to this the better. I wished I took it earlier but better late than never. Money well spent in my opinion as I had already had a great conversation with some of my friends about this and they are hugely interested after my sharing to learn and apply to their personal lives. Thanks once again Cindy and Vivien, am already considering L2 in time to come!",
      clientName: "Sandy Zhuo",
    },
    {
      title: "What our customer says",
      description:
        "It was an amazing two day course that gave me great insight on myself and the relationships I had with people. The trainers were very informative and had great subject knowledge. They were very open to sharing their own real life experiences. It was also very engaging and I got to hear from the other coursemates about how they viewed things. I look forward to using what has been taught in both my personal and professional life!",
      clientName: "Pavan Gill",
    },
    {
      title: "What our customer says",
      description:
        "Just attended this two days Enneagram course. Have learned interesting insights about myself and also having a better understanding of the people around me, this would help me with personal growth and having better communications with people. The lessons were informative and interactive!",
      clientName: "Evangelyn Ariel",
    },
    {
      title: "What our customer says",
      description:
        "The 2 days Enneagram course has given me valuable insights of each personality type that I can relate to for example, myself, my family and friends, bosses and colleagues. I can improve or use different communication styles to communicate with them for better personal and work relationships. The sharing, discussions, reflections by trainer Vivien and participants are truly real life lessons that we can all learn and value from and appreciate. I highly recommend this course to anyone who wants to know themselves better and how to better connect with their family, friends and at work.",
      clientName: "Ena Kwok",
    },
    {
      title: "What our customer says",
      description:
        "People management with Enneagram. It allow me to know more about myself and other people that I am working with. The course is fun and interesting.",
      clientName: "Keng Wah Lam",
    },
    {
      title: "What our customer says",
      description:
        "The class was interactive, and I really enjoyed how we were encourage to apply it to our relationships.",
      clientName: "Abigail Chong",
    },
    {
      title: "What our customer says",
      description:
        "Cindy has helped me gain clarify of my personal strengths and how to better solve any “people” issues regarding business. I highly recommend business owners to attend her course",
      clientName: "Zac Chua",
      role: "Founder of The Kettle Gourmet",
    },
    {
      title: "What our customer says",
      description:
        "I never attend such courses before. It helps me to understand myself and also aware of my weakness which I am able to improve myself. I get to understand others as well which helps me to learn how to communicate better with them. I like this course so much and i will definitely recommend to everyone.",
      clientName: "Anthony Ng",
    },
    {
      title: "What our customer says",
      description:
        "It was an insightful lessons to learn, to understand our types and cores of character. It’s allow us to use our strength and work on our weakness, thus it’s help on our individual growth, support and empower others.",
      clientName: "Loh Yu Tee",
    },
    {
      title: "What our customer says",
      description:
        "Attended the enneagram course and learned a lot about myself and others. Learning about the different types helped tremendously on understanding my family, friends and colleagues better. It was very insightful and relatable as well. Thanks Rina for recommending it, loved it!",
      clientName: "Rachel Lim",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-testimonial_bg bg-cover bg-top w-full py-24"
    >
      <div className="flex md:px-24 px-5 lg:px-56 w-full h-full justify-center items-center flex-col">
        <div>
          <Quotes width={89} height={88} />
        </div>
        <div className="text-lg font-medium tracking-xl text-gray-190 py-2">
          {tTestimonials("Testimonials")}
        </div>
        <Swiper
          ref={swiperRef}
          className="md:px-0 px-2.5 flex md:w-[calc(92%_-_1.5rem)] w-full cursor-grab"
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          speed={1500}
          modules={[Autoplay]}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          {Test.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl lg:text-2xxl font-bold lg:tracking-5xl text-white">
                  {tIndex("heroBanner.What our customer says")}
                </div>
                <p className="text-center text-base lg:font-medium md:tracking-xl text-white py-4 my-3">
                  {item.description}
                </p>
                <div className="flex items-center mt-5 gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} width={24} height={24} />
                  ))}
                </div>
                <div className="text-lg text-white font-normal capitalize mt-3">
                  {item.clientName}
                </div>
                <div className="text-base text-white font-normal">
                  {item.role}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-5 mt-5">
          <div
            className="cursor-pointer"
            onClick={() => swiperRef?.current?.swiper.slidePrev()}
          >
            <Leftarrow width={"2rem"} height={"2rem"} color="white" />
          </div>
          <div className="flex items-end gap-1">
            <div className="text-5xl text-white font-normal">
              {String(currentIndex + 1).padStart(2, "0")}
            </div>
            <div className="text-xl font-normal text-white">/{Test.length}</div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => swiperRef?.current?.swiper.slideNext()}
          >
            <Rightarrow width={"2rem"} height={"2rem"} color="white" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
