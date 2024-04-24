"use client";
import { FormEvent, useState } from "react";
import { BsEmojiGrin } from "react-icons/bs";
import { FaCalendar, FaCog, FaImage, FaPoll } from "react-icons/fa";
import "../styles/home.scss";

export default function Home() {

  const [postInputLength, setPostInputLength] = useState(0);

  const handlePostInput = (event: FormEvent<HTMLTextAreaElement>) => {
    const target = (event.target as HTMLTextAreaElement);
    target.style.height = 'auto';
    const newHeight = Math.min(target.scrollHeight, window.innerHeight / 2);
    target.style.height = `${newHeight}px`
    setPostInputLength(target.value.length);
  }

  return (
    <>
      <div className="home-header">
        <button className="full">For You</button>
        <button className="full">Following</button>
        <button><FaCog /></button>
      </div>
      <div className="home-post">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="profile" src="/logo.svg" width={40} height={40} alt="pfp" />
        <div className="home-post-editor">
          <div className="home-post-text-area-wrapper">
            <textarea maxLength={280} onInput={handlePostInput} placeholder="What is on your mind?" />
            <span className={postInputLength >= 280 ? "home-post-text-area-limit" : ''}>{postInputLength}/280</span>
          </div>
          <div className="home-post-editor-options">
            <button><FaImage /></button>
            <button><FaPoll /></button>
            <button><BsEmojiGrin /></button>
            <button><FaCalendar /></button>
          </div>
        </div>
      </div>
    </>
  );
}
