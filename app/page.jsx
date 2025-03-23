"use client";

import Image from "next/image";
import { useState } from "react";

import { assets } from "@/assets/assets";
import Sidebar from "@/components/Sidebar";
import PromptBox from "@/components/PromptBox";
import Message from "@/components/Message";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        {/* --- sidebar --- */}
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image onClick={() => (expand? setExpand(false) : setExpand(true))}
              className="rotate-180" src={assets.menu_icon} alt="" />
            <Image className="rotate-180" src={assets.chat_icon} alt="" />
          </div>
          
          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image src={assets.logo_icon} alt="" className="h-16" />
                <p className="text-2xl font-medium">嗨，我是DeepSeek。</p>
              </div>
              <p className="text-sm mt-2">今天我能帮你什么吗？</p>
            </>
          ) : (
            <div>
              <Message role="user" content="What is next js?" />
            </div>
          )}
          {/* --- prompt box --- */}
          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
          <p className="text-xs absolute bottom-1 text-gray-500">人工智能生成，仅供参考</p>
        </div>
      </div>
    </div>
  );
}
