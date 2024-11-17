// import { Email, FacebookBlog, LinkedIn, Pinterest, Reddit, Telegram, Tumblr, TwitterBlog, Vk, Whatsapp, Xing } from '@/public/assets/icon/Icon';
import React from 'react';

type links={
    path:string;
    icon:React.ReactNode
  }

interface BlogProps {
    links: links[] ;
}

function Blog_icon({ links = [] }: BlogProps) {
    console.log(links);
    return (
        <div className="flex gap-4 flex-wrap lg:justify-start justify-center items-center">
            {
                links.map((item, index) => (
                    <a 
                        key={index} 
                        href={item.path} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title="Social link"
                        className="social-icon"
                    >
                        {item.icon}
                    </a>
                ))
            }
        </div>
    );
}

export default Blog_icon;
