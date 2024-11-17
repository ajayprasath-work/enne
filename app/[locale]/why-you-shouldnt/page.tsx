"use client";
import React, { useEffect, useState } from "react";
import { DetailBanner } from "@/components/Herosection";
import { Resources_data } from "@/components/Resources_data";
import Image from "next/image";
import Blog_icon from "@/components/Blog_icon";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
export default function detail() {
  const id = localStorage.getItem("id");

  return (
    <>
    <Menu/>
      {Resources_data.map(
        (item) =>
          item.id === id && (
            <DetailBanner Bg_path={item.banner_img_path} title={item.title} />
          )
      )}
      <section className="py-16 md:py-24 w-full px-5 md:px-0 md:w-10/12 lg:w-[70%] mx-auto text-lg text-[#041B37]">
        <div className="flex flex-col">
          <div className="text-2xl font-bold">
            Why You Shouldn’t Be Afraid Of Being Vulnerable At Work
          </div>
          <div className="flex flex-col mt-8 gap-8">
            <p>
              Yes, it may sound counter-intuitive to show vulnerability in the
              workplace. After all, in order to move forward in our career,
              we’re supposed to constantly show that we have it all together.
            </p>
            <p>
              But here’s the thing: being vulnerable isn’t about showing
              weakness. Instead, it’s about being comfortable and brave enough
              to be open and honest in a professional setting without the fear
              of being “punished” in the form of a bad appraisal or reprimand
              from your boss.
            </p>
            <p>
              The result: you’ll learn from your mistakes rather than try to
              hide them. And on the personal front, letting your co-workers know
              when you’re going through a tough time can be the difference
              between getting no support at work to getting help in terms of
              managing your workload and deadlines
            </p>
            <p>
              And on top of it all, your team ends up with more creative and
              innovative solutions because people won’t be afraid of sharing
              their ideas.
            </p>
            <p>
              Say your grandmother is in the hospital fighting a serious
              illness, or you’ve made a huge mistake at work. Would you talk to
              your colleagues or your boss about it?
            </p>
            <p>
              If your answer is ‘yes’, then congratulations—you’ve hit the
              jackpot with a workplace that fosters a culture of vulnerability.
              According to a 2017 article in the Harvard Business Review, those
              who trust their co-workers enough to be open with them are
              reported to be 40 percent more likely to enjoy their work than
              those who don’t
            </p>
            <p>
              Also, the chances of you experiencing burnout are lessened by 60
              percent. You’re also likely to be 50 percent more productive.
            </p>
          </div>
          <div className="flex flex-col gap-8 mt-8">
            <div className="text-5xl font-bold">
              Vulnerability starts with a boss you can trust
            </div>
            <p>
              A leader defines the team culture, says Olivia Coléon, cultural
              specialist and founder of Naked Nights, an event series that
              celebrates vulnerability. She says leaders must be willing to hear
              their team members out and ask for help when they need it to set
              an example for the rest of the team.
            </p>
            <p>
              Cindy Leong, personality coach and corporate trainer at
              Relationship Studio, chose to have an open communication policy at
              her company because she had experienced what it was like to “keep
              things professional”. “At the previous company I worked, we were
              told to ‘behave like adults’,” she explains. “This meant a culture
              where the boss was always right, and there was no room for open
              discussion.”
            </p>
            <p>
              Cindy could not share her feedback honestly back then, and this
              caused her to be miserable. She says as an employee in her
              position, you either need to have the support of your peers to
              push for better communication, or leave and find a company that
              has an existing culture of vulnerability.
            </p>
            <p>
              Struggle with being vulnerable in the workplace, or allowing your
              colleagues to be vulnerable around you? Here are four tips from
              Cindy.
            </p>
          </div>
          <div className="flex flex-col mt-8">
            <div className="text-xl font-semibold">
            1. Use the right words and tone 
            </div>
            <p className="mt-5">
            That means that whenever there is a disagreement, refrain from making you team members feel attacked. Instead, remain objective and focus on the problem. “I believe in direct vulnerable, authentic and encouraging language that promotes growth,” Cindy says.
            </p>
          </div>
          <div className="flex flex-col mt-8">
            <div className="text-xl font-semibold">
            2. Check in regularly
            </div>
            <p className="mt-5">
            Cindy has weekly team meetings where her staff shares about their victories and struggles at work, as well as in their own personal lives. Through these meetings, her team feels a closer social connection and loyalty to her and to each other. She’s also better able to support their needs.
            </p>
          </div>
          <div className="flex flex-col mt-8">
            <div className="text-xl font-semibold">
            3. Encourage counselling or coaching for personal growth
            </div>
            <p className="mt-5">
            Not everything can be solved simply by hashing it out in a meeting room. “Some problems stem from deep-seated personal insecurities, in which case I send my staff for private coaching to work on them,” Cindy says. This is an opportunity for personal and professional development.
            </p>
          </div>
          <div className="flex flex-col mt-8">
            <div className="text-xl font-semibold">
            4. Know what to share…and not share 
            </div>
            <p className="mt-5">
            It may be helpful for your boss to know you’re going through a bad breakup, because then she knows why you’re more distracted or tired than usual. but does she really need to know the gory details? Probably not…
            </p>
            <p className="mt-5">
            Of course, it’s up to each employee to determine what their boundaries are, adds Olivia. But if you’re a manager, letting your staff know they can talk to you about anything is absolutely crucial to building trust.
            </p>
          </div>
          <div className="text-end mt-12">
          This article is featured in CLEO. Written by Davelle Lee on 12 November 2019
          </div>
          <div className="my-7 border border-r-0 border-l-0 border-[#B9ABC8] py-2.5">
            <span className="text-lg font-semibold text-[#D5B0C2]">
              By Cindy Leong... | March 18, 2020 | Business, Enneagram at Work, Media Feature | 0 Comments
            </span>
          </div>
          <div className="p-4 md:p-8 bg-[#F9F9FB] text-[#043156] text-xl font-bold flex flex-col lg:flex-row gap-4 w-full justify-between items-center">
            <span className="text-center">
              Share This Story, Choose Your Platform!
            </span>
            <div className="flex">
              {
                Resources_data.map((items) =>(
                  items.id === id && <Blog_icon  links= {items.links}/>
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
