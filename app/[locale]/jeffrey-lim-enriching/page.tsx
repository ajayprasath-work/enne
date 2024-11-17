"use client";
import React, { useEffect, useState } from "react";
import { DetailBanner } from "@/components/Herosection";
import { Resources_data } from "@/components/Resources_data";
import Image from "next/image";
import Blog_icon from "@/components/Blog_icon";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
export default function detail() {
  const [storedValue, setStoredValue] = useState<any>(1);

 
  

  return (
    <>
    <Menu/>
      {Resources_data.map(
        (item) =>
          item.id === storedValue && (
            <DetailBanner Bg_path={item.banner_img_path} title={item.title} />
          )
      )}
      <section className="py-16 md:py-24 w-full px-5 md:px-0 md:w-10/12 lg:w-[70%] mx-auto text-lg text-[#041B37]">
        <div className="flex flex-col">
          <div className="text-2xl font-bold">
          Jeffrey Lim: Enriching One’s Life Through The Enneagram
          </div>
          <div className="text-sm italic mt-8">
          “We can all bring ourselves to the next level, excelling in what we do.”
          </div>
          <div className="text-lg mt-8">
          The Enneagram has helped many of us in personal and professional development – This was one big takeaway I got from Jeffrey Lim, our alumnus from The Enneagram Academy. Jeffrey first joined our April 2023 class and since then, his personal and professional lives have been greatly transformed. I had the opportunity to sit down with Jeffrey to hear his transformation story.
          </div>
      <div className="mt-8 flex flex-col">
      <div className="font-bold">
          The Acquaintance
          </div>
          <div className="mt-5">
          It turned out that Jeffrey got acquainted with us through our ambassador, Belinda Lee’s Instagram. Belinda had attended the Enneagram course and through it, obtained insights into her life and gained clarity about herself. In addition, watching the video clips and reading the articles on LinkedIn intrigued Jeffrey so much, he decided to learn about his personality. Jeffrey wanted to know why he is different from others and how to differentiate himself. Before he came across our Academy, he was already looking to improve himself. So, when he read about what we offered and the potential changes our courses could bring him, it seemed like the perfect place for growth and self-development! Jeffrey enjoyed learning the Enneagram so much, he went on all the way to Level 2 to improve himself even further!
          </div>
      </div>
      <div className="mt-8 flex flex-col">
      <div className="font-bold">
      The Self-Revelation
          </div>
          <div className="mt-5">
          Jeffrey learnt that as a 5w6, he has an introverted personality and does not take well to people invading his personal space. “I don’t like it when people don’t know safe distancing,” Jeffrey said. He also realised that he is generally able to see the big picture and form very good perspectives of things. Gaining clarity – a Type 5 trait – is the key to achieving these. As a Type 5, he also enjoys working with data. This is why he loves having information at his fingertips before he makes decisions. “Before I travel, whether for work or holiday, I like to read up about everything about the destination and even the airline!”
          </div>
          <div className="mt-5">
          Learning the Enneagram also revealed a darker side of himself: He tends to self-sabotage. He has inner voices and inner thoughts. However, having this knowledge means that now, he is able to tell himself that he can change things and he has the ability to make things happen. He puts in the effort to do things and even skips less important things to work on what he yearns for. Jeffrey quoted the example of his own learning episode. “I’m currently pursuing a Masters programme. I was supposed to have done it in 2018 but back then, I thought I didn’t have sufficient experience. I finally started in 2021 but I faced difficulties and wanted to give up halfway. Learning the Enneagram made me realise I was on the right track. It taught me that I need to be objective and that I have inner strength and self-confidence. Today, I’m actually enjoying the journey!”``
          </div>
      </div>
      <div className="mt-8 flex flex-col">
      <div className="font-bold">
      Dealing With People
          </div>
          <div className="mt-5">
          In the past, Jeffrey thought people were aggressive. Today, he realises they’re just what they are. What we see and hear is just a manifestation of their personalities. Learning the Enneagram has taught Jeffrey to appreciate the differences between people and to celebrate the diversity. Today, at work or family, he reacts to people differently. Jeffrey shared a story to illustrate this point. Jeffrey’s ex-boss was a Type 3. Before learning the Enneagram, he used to prepare PowerPoint decks with as many as eight slides. Since learning the Enneagram, he has understood that two slides were all she needed to give a presentation. She did not need to know the details! Jeff added, “Today, I prepare a more concise deck. I give minimal information at the front but leave the details in the Appendix, in case they’re needed.”
          </div>
          <div className="mt-5">
          Jeffrey shared that today, because he understands why 5w6 and 6w5 may behave in a similar way as he does, he also appreciates people who are like him more. Although he is a Type 5, Jeffrey can assess the traits of Types 7 and 8 (Jeffrey’s connecting lines). He can be carefree and decisive, and he enjoys good travels on his own. “I’m appreciating myself more today than ever!”
          </div>
      </div>
      <div className="mt-8 flex flex-col">
      <div className="font-bold">
      Applying the Enneagram at the Workplace
          </div>
          <div className="mt-5">
          Professional development is very much in Jeffrey’s DNA. Jeffrey takes charge of talent management and retention in his organisation, so the Enneagram comes in very useful when working with people, including his boss! Jeffrey shared that he crossed from another company to this current firm not long ago, around the same time when he learnt the Enneagram. “When I came here, I introduced it to my organisation and the staff are experiencing the wonders that the Enneagram gives them. A manager who was known to be difficult had a coaching session with me,” he shared. “During the coaching session, I refrained from making any judgement through conversation, ideas and views. I provided him with the space to be upfront and honest about his growth. He saw the light and decided to work on himself – That was one huge satisfaction I got!”
          </div>
      </div>
      <div className="mt-8 flex flex-col">
      <div className="font-bold">
      Tips For Fellow Type 5s
          </div>
          <div className="mt-5">
          “The Enneagram brings other benefits too. During the one-on-one coaching session, my Coach helped me to see new versions of myself. I was able to see possibilities I never knew was possible to create.”
          </div>
          <div className="mt-5">
          For fellow Type 5s, Jeffrey had these words to share: “Be assertive and honest with what you like or dislike. ⁠Be fearless and take action instead of simply thinking of making a breakthrough. ⁠Learn to trust yourself and build credibility by achieving new things, such as doing oil paintings.”
          </div>
      </div>
      <div className="mt-8 flex flex-col">
      <div className="font-bold">
      The Next Level
          </div>
          <div className="mt-5">
          Jeffrey has these parting words for us, “First, appreciate and understand yourself. Only then will you realise how others are known to you. We can all bring ourselves to the next level, excelling in what we do.”
          </div>
        
      </div>
          <div className="my-7 border border-r-0 border-l-0 border-[#B9ABC8] py-2.5">
            <span className="text-lg font-semibold text-[#D5B0C2]">
              By Cindy Leong... | April 13, 2024 | Lifestyle
              | Comments Off
            </span>
          </div>
          <div className="p-4 md:p-8 bg-[#F9F9FB] text-[#043156] text-xl font-bold flex flex-col lg:flex-row gap-4 w-full justify-between items-center">
            <span className="text-center">
              Share This Story, Choose Your Platform!
            </span>
            <div className="flex">
            {
                Resources_data.map((items) =>(
                  items.id === storedValue && items.links && <Blog_icon  links= {items.links}/>
                ))
              }
            </div>
          </div>
          <div className="mt-16 md:mt-24 flex flex-col gap-5">
            <span className="text-3xl md:text-4xl xl:text-5xl font-bold">
              About the Author: Cindy Leong
            </span>
            <div className="bg-[#041B37] p-4 md:p-8 rounded-[10px] text-white">
              <span className="leading-6">
                Cindy Leong is a sought after bilingual (English and Mandarin)
                Enneagram Personality Coach and Corporate Trainer in Asia, who
                can help you make sense of your professional and personal
                relationships. She is a member of International Coach Federation
                (ICF) and Singapore Psychological Society (SPS). Besides a
                Bachelor Degree in Psychology (majoring in Communications), she
                also has a Diploma in Business and has done in-depth research
                and studies in the areas of Organisational Behaviour and Gender
                Communications, both in Singapore and Taiwan. Through her
                expertise in corporate executive coaching, personal development,
                and relationship coaching, she has helped many professionals in
                their walk through challenging times, particularly in the areas
                of identity searching, relationship building and career
                breakthrough. Aside from being a published author of 2 books,
                she has also been invited by several radio stations and
                magazines as an expert guest speaker to provide insights into
                Enneagram, workplace conflicts and relationships.
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
