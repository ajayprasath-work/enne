"use client";
import React, { useEffect, useState } from "react";
import { DetailBanner } from "@/components/Herosection";
import { Resources_data } from "@/components/Resources_data";
import Image from "next/image";
import Blog_icon from "@/components/Blog_icon";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
export default function detail() {
  const id = "1";

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
            Here’s How Stress Looks Like for Each Enneagram Type and Ways to
            Manage It
          </div>
          <div className="text-lg mt-8">
            Here in Singapore, a whopping 92 percent of the working Singaporeans
            reported feeling stressed according to the 2019 Cigna 360 Well-Being
            Survey which is significantly higher than the global average of 84
            percent. <span className="font-bold">Source</span>
          </div>
          <div className="text-lg mt-8">
            Stress has different faces, let’s discuss how each Enneagram type
            looks like when they’re feeling stressed out and how to effectively
            manage stress:
          </div>
          <div className="flex flex-col mt-8 ">
            <div className=" text-xl font-bold ">
              Type 1 (The Perfectionist)
            </div>
            <p className="mt-8">
              When stressed, you start feeling overwhelmed and overly critical
              of others who you sense are being lazy or taking advantage of you.
              You tend to become more emotional and fixated on an “escape” from
              your troubles. You may start being resentful towards the people
              who count on you.
            </p>
            <p className="mt-8">Ways to combat stress:</p>
            <ul className="mt-8 pl-10  list-disc">
              <li>Allocate a huge chunk of your time just to relax</li>
              <li>Spend time with your fun-loving friends or family</li>
            </ul>
          </div>
          <div className="flex flex-col mt-12 ">
            <div className=" text-xl font-bold ">Type 2 (The Helper)</div>
            <p className="mt-8">
              You are known for being kind and generous but when you’re stressed
              you can be harsh and direct towards people which may surprise
              them. The need to accomplish goals and this feeling of pressure
              can lead to burnout and a sense of rage towards people who you
              feel have taken you for granted.
            </p>
            <p className="mt-8">Ways to combat stress:</p>
            <ul className="mt-8 pl-10  list-disc">
              <li>Learn how to say “no” and set healthy boundaries</li>
              <li>
                Treat yourself – take yourself on a date, explore new places
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-12 ">
            <div className=" text-xl font-bold ">Type 3 (The Achiever)</div>
            <p className="mt-8">
              In times of stress, you can become overly fixated on how you
              appear and overly attached to your accomplishments. The usual
              goal-oriented and competent person may start slowing down and feel
              unmotivated.
            </p>
            <p className="mt-8">Ways to combat stress:</p>
            <ul className="mt-8 pl-10  list-disc">
              <li>
                Practice mindfulness and get in touch with your authentic
                feelings, needs and desires
              </li>
              <li>
                Spend time with people who knows you in and out, the people who
                you don’t need to impress
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-12 ">
            <div className=" text-xl font-bold ">
              Type 4 (The Individualist)
            </div>
            <p className="mt-8">
              As someone who’s deeply connected with their emotions, you may
              find yourself in a melancholic state when stressed. You may also
              begin forming new friendships or start volunteering to fill the
              dark void. In hindsight, this is good way to combat stress if you
              are not doing it for the wrong reasons.
            </p>
            <p className="mt-8">Ways to combat stress:</p>
            <ul className="mt-8 pl-10  list-disc">
              <li>Be with nature; go for a hike or travel</li>
              <li>
                Express your emotions by writing about it or through another
                form of art
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-12 ">
            <div className=" text-xl font-bold ">
            Type 5 (The Investigator)
            </div>
            <p className="mt-8">
            As your default, you are very private and reserved. When you’re in a plague of conflict and stress you isolate yourself and become more emotionally detached. When this coping mechanism fails to help you then you might suddenly throw yourself into activities that stimulate your senses.
            </p>
            <p className="mt-8">Ways to combat stress:</p>
            <ul className="mt-8 pl-10  list-disc">
              <li>Get in touch with your feelings and reach out to someone you trust</li>
              <li>
              Create a workout routine and stick to it
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-12 ">
            <div className=" text-xl font-bold ">
            Type 6 (the Loyalist)
            </div>
            <p className="mt-8">
            As a Type 6, you are prone to anxiety attacks and tend to overreact under stress. This stress causes you to be more workaholic. You may become overly needy as a way to deal with your insecurity and anxiety.
            </p>
            <p className="mt-8">Ways to combat stress:</p>
            <ul className="mt-8 pl-10  list-disc">
              <li>Practice gratitude. List things that you’re thankful for each day</li>
              <li>
              Meditate or talk to a professional
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-12 ">
            <div className=" text-xl font-bold ">
            Type 7 (The Enthusiast)
            </div>
            <p className="mt-8">
            A stressed Type 7 will be in a manic state, distracting oneself by engaging in several activities that are stimulating. You may find yourself being overly critical. You may build up anger and become nit-picky.
            </p>
            <p className="mt-8">Ways to combat stress:</p>
            <ul className="mt-8 pl-10  list-disc">
              <li>Find joy in ordinary, peaceful moments, and take time to slow down</li>
              <li>
              Schedule alone time away from external stimulation
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-12 ">
            <div className=" text-xl font-bold ">
            Type 8 (The Challenger)
            </div>
            <p className="mt-8">
            A Type 8 under stress will become excessive in different ways – overeating, excessive exercise, workaholic, etc. You might be over controlling and be aggressive with your opinions. You may also turn your aggression inwards and be withdrawn
            </p>
            <p className="mt-8">Ways to combat stress:</p>
            <ul className="mt-8 pl-10  list-disc">
              <li>Do cardio and other physically demanding activities</li>
              <li>
              Give yourself space to process and validate your emotions
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-12 ">
            <div className=" text-xl font-bold ">
            Type 9 (The Peacemaker)
            </div>
            <p className="mt-8">
            The calm and optimistic Type 9 will be anxious and overwhelmed during a stressful period. You numb yourself or re-frame to avoid dealing with inner conflict. Externally, you become obsessed with accomplishing things and creating social security. You also tend to become more reactive and passive-aggressive towards other people.
            </p>
            <p className="mt-8">Ways to combat stress:</p>
            <ul className="mt-8 pl-10  list-disc">
              <li>Go on a retreat or make time for quiet reflection</li>
              <li>
              Get a plant or a pet and spend quality time taking care of it
              </li>
            </ul>
          </div>
          <div className="mt-12">
          Curious about your Enneagram Type? Gain self-awareness and build stronger relationships by signing up to our course <span className="font-bold">here</span>.
          </div>
          <div className="my-7 border border-r-0 border-l-0 border-[#B9ABC8] py-2.5">
            <span className="text-lg font-semibold text-[#D5B0C2]">
              By Cindy Leong... | January 2, 2018 | Business, Enneagram at Work
              | 0 Comments
            </span>
          </div>
          <div className="p-4 md:p-8 bg-[#F9F9FB] text-[#043156] text-xl font-bold flex flex-col lg:flex-row gap-4 w-full justify-between items-center">
            <span className="text-center">
              Share This Story, Choose Your Platform!
            </span>
            <div className="flex">
             {
              Resources_data.map((items) =>(
                items.id === id && items.links && <Blog_icon  links= {items.links}/>
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
