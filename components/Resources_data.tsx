import React from "react";
import { Email, FacebookBlog, LinkedIn, Pinterest, Reddit, Telegram, Tumblr, TwitterBlog, Vk, Whatsapp, Xing } from "@/public/assets/icon/Icon";


type links={
  path:string;
  icon:React.ReactNode
}
type DataProps = {
  id: string;
  description: string[];
  source_path:string;
  title: string;
  type_img_path?: string;
  banner_img_path: string;
  Individualist?: string[];
  Investigator?: string[];
  Loyalist?: string[];
  Challenger?: string[];
  Enthusiast?: string[];
  Peacemaker?: string[];
  links:links[];
  path?:string;
  icon?:React.ReactNode;
  SubTitle?: {
    Helper?: string[];
    Achiever?: string[];
    Perfectionist?: string[];
    Individualist?: string[];
    Investigator?: string[];
    Loyalist?: string[];
    Enthusiast?: string[];
    Challenger?: string[];
    Peacemaker?: string[];
    Colleague?: string[];
  }
}
export var Resources_data:DataProps[]=[
    {
        id:'1',
        description:[
            "Enneagram, a roadmap to understanding human behavior, has a history of over 2500 years. An elegant way to explore differences in personality in relationships, it has been proven to be highly effective for business management, personal development and conflict management. It categorizes each person according to prevalence in nine different personality types, with each having a dominant type.",
            "This enables individuals to predict behavior in personal relationships and corporate life. See if any of these descriptions of Enneagram types in the workplace perfectly encapsulate your colleagues or friends or even yourself!",
        ],
        title:"9 Corporate Personality Types You Need To Know How To Deal With",
        source_path:'/9-corporate-personality',
        type_img_path:"/assets/images/Corporate_Personality.webp",
        banner_img_path:"bg-Corporate-Personality",
        links:[
          {
            path:"https://www.facebook.com/sharer.php?u=https%3A%2F%2Frelationshipstudio.sg%2F9-corporate-personality-types-you-need-to-know-how-to-deal-with%2F&t=9%20Corporate%20Personality%20Types%20You%20Need%20To%20Know%20How%20To%20Deal%20With",
            icon :<FacebookBlog width={20} height={20}/>
          },
          {
            path:"https://x.com/share?url=https%3A%2F%2Frelationshipstudio.sg%2F9-corporate-personality-types-you-need-to-know-how-to-deal-with%2F&text=9%20Corporate%20Personality%20Types%20You%20Need%20To%20Know%20How%20To%20Deal%20With",
            icon :<TwitterBlog width={16} height={16}/>
          },
          {
            path:"https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Frelationshipstudio.sg%252F9-corporate-personality-types-you-need-to-know-how-to-deal-with%252F%26title%3D9%2BCorporate%2BPersonality%2BTypes%2BYou%2BNeed%2BTo%2BKnow%2BHow%2BTo%2BDeal%2BWith",
            icon :<Reddit width={20} height={20}/>
          },
          {
            path:"https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252F9-corporate-personality-types-you-need-to-know-how-to-deal-with%252F%26title%3D9%2520Corporate%2520Personality%2520Types%2520You%2520Need%2520To%2520Know%2520How%2520To%2520Deal%2520With%26summary%3DEnneagram%252C%2520a%2520roadmap%2520to%2520understanding%2520human%2520behavior%252C%2520has%2520a%2520history%2520of%2520over%25202500%2520years.%2520An%2520elegant%2520way%2520to%2520explore%2520differences%2520in%2520personality%2520in%2520relationships%252C%2520it%2520has%2520been%2520proven%2520to%2520be%2520highly%2520effective%2520for%2520business%2520management%252C%2520personal%2520development%2520and%2520confl",
            icon :<LinkedIn width={20} height={20}/>
          },
          {
            path:"https://api.whatsapp.com/send?text=https%3A%2F%2Frelationshipstudio.sg%2F9-corporate-personality-types-you-need-to-know-how-to-deal-with%2F",
            icon :<Whatsapp width={20} height={20}/>
          },
          {
            path:"https://t.me/share/url?url=https%3A%2F%2Frelationshipstudio.sg%2F9-corporate-personality-types-you-need-to-know-how-to-deal-with%2F",
            icon :<Telegram width={20} height={20}/>
          },
          {
            path:"https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3FshareSource%3Dlegacy%26canonicalUrl%3D%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252F9-corporate-personality-types-you-need-to-know-how-to-deal-with%252F%26posttype%3Dlink%26title%3D9%2BCorporate%2BPersonality%2BTypes%2BYou%2BNeed%2BTo%2BKnow%2BHow%2BTo%2BDeal%2BWith%26caption%3DEnneagram%252C%2Ba%2Broadmap%2Bto%2Bunderstanding%2Bhuman%2Bbehavior%252C%2Bhas%2Ba%2Bhistory%2Bof%2Bover%2B2500%2Byears.%2BAn%2Belegant%2Bway%2Bto%2Bexplore%2Bdifferences%2Bin%2Bpersonality%2Bin%2Brelationships%252C%2Bit%2Bhas%2Bbeen%2Bproven%2Bto%2Bbe%2Bhighly%2Beffective%2Bfor%2Bbusiness%2Bmanagement%252C%2Bpersonal%2Bdevelopment%2Band%2Bconflict%2Bmanagement.%2BIt%2Bcategorizes%2Beach%2Bperson%2Baccording%2Bto%2Bprevalence%2Bin%2Bnine%2Bdifferent%2Bpersonality%2Btypes%252C%2Bwith%2Beach%2Bhaving%26content%3Dhttps%253A%252F%252Frelationshipstudio.sg%252F9-corporate-personality-types-you-need-to-know-how-to-deal-with%252F",
            icon :<Tumblr width={20} height={20}/>
          },
          {
            path:"https://in.pinterest.com/pin-builder/?description=Enneagram%2C+a+roadmap+to+understanding+human+behavior%2C+has+a+history+of+over+2500+years.+An+elegant+way+to+explore+differences+in+personality+in+relationships%2C+it+has+been+proven+to+be+highly+effective+for+business+management%2C+personal+development+and+conflict+management.+It+categorizes+each+person+according+to+prevalence+in+nine+different+personality+types%2C+with+each+having&media=https%3A%2F%2Frelationshipstudio.sg%2Fwp-content%2Fuploads%2F2018%2F01%2F9-Corporate-Personality-Types-You-Need-To-Know-How-To-Deal-With.png&method=button&url=https%3A%2F%2Frelationshipstudio.sg%2F9-corporate-personality-types-you-need-to-know-how-to-deal-with%2F",
            icon :<Pinterest width={20} height={20}/>
          },
          {
            path:"https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%253A%252F%252Frelationshipstudio.sg%252F9-corporate-personality-types-you-need-to-know-how-to-deal-with%252F%26title%3D9%2520Corporate%2520Personality%2520Types%2520You%2520Need%2520To%2520Know%2520How%2520To%2520Deal%2520With%26description%3DEnneagram%252C%2520a%2520roadmap%2520to%2520understanding%2520human%2520behavior%252C%2520has%2520a%2520history%2520of%2520over%25202500%2520years.%2520An%2520elegant%2520way%2520to%2520explore%2520differences%2520in%2520personality%2520in%2520relationships%252C%2520it%2520has%2520been%2520proven%2520to%2520be%2520highly%2520effective%2520for%2520business%2520management%252C%2520personal%2520development%2520and%2520conflict%2520management.%2520It%2520categorizes%2520each%2520person%2520according%2520to%2520prevalence%2520in%2520nine%2520different%2520personality%2520types%252C%2520with%2520each%2520having&display=widget",
            icon :<Vk width={20} height={20}/>
          },
          {
            path:"https://login.xing.com/?dest_url=https%3A%2F%2Fwww.xing.com%2Fsocial%2Fshare%2Fspi%3Fh%3D1%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252F9-corporate-personality-types-you-need-to-know-how-to-deal-with%252F",
            icon :<Xing width={20} height={20}/>
          },
          {
            path:"mailto:?body=https://relationshipstudio.sg/9-corporate-personality-types-you-need-to-know-how-to-deal-with/&subject=9%20Corporate%20Personality%20Types%20You%20Need%20To%20Know%20How%20To%20Deal%20With",
            icon :<Email width={20} height={20}/>
          },
          
        ],
        SubTitle: {
          Perfectionist:[
            "Type 1: The Perfectionist",
            "Type 1s tend to have a need to be perfect, accurate and precise . Do you have a colleague that likes schedules, accountability and a clear list of roles and responsibilities? He is probably a type 1 personality. This type tends to thrive when there is clear rules and standards. They are meticulous and keep high standards and they probably perform well. You might want to try to keep up with their way of doing things.",
            "Priding themselves in being the most competent, and being able to do things with high standards, this type often compares their own effort to others and will aim to put themselves hard to be the best that they can. In needing to be perfect, this type may avoid risks and may shift the blame to others if they see or do something wrong to keep up their “track record” of being right. A good way to deal with them will be to offer alternatives and giving them the credit for “perfecting” other alternatives to fit the needs of different ones."
          ],
          Helper:[
            "Type 2 – The Helper",
            "Type 2s are very giving. Motivated by their need to be needed, they are often generous, kind and always ever ready to help. They are probably one of the friendliest, accepting and sensitive colleagues at your office. But you may find that they seldom ask for help because they always want to be of help to you instead. Highly responsive to approval and encouragement, they work for the respect of others, especially those that are important in their field. In their desire to always be supportive, they may find it hard to say no, causing them to take on too many projects at once. You may find them not willing to collect money from you after buying a meal for you, and that’s the time you have to insist on paying them, or reciprocate the next time. Try not to take them for granted.",
          ],
          Achiever:[
            "Type 3 – The Achiever",
            "Also known as the performer or producer, type 3s place their self-confidence and worth in being able to achieve things and be successful. They are efficient and want a clear path to success. They are motivated in getting respect for their abilities. Image conscious, they enjoy tasks that put them at the forefront of projects, by doing presentations and having leadership roles. They enjoy exerting power over people and take life as a competition. If tasks and goals become interrupted or their appearance take a hit, they will then be driven by rage and may even resort to deceitful tactics to get their way. A good way to deal with them is to always put them in a good light and help them speak about their vulnerabilities.",
          ],
          Individualist:[
            "Type 4 – The Individualist",
            "While type 1 and type 3s aim to do well on performance evaluations, type 4s base their success on producing quality work that is filled with authenticity, depth, insight and meaning. They tend to be the authentic type who are expressive and in touch with their feelings. However, their attention potentially gets displaced from tasks when their emotions take over and their efficiency is tied to their mood. With their easily changeable moods and the need for distinctive work, they do not flourish in an environment that requires close co-operation with others who are more skilled, valued, or better paid.",
          ],
          Investigator:[
            "Type 5 – The Investigator",
            "This personality type is one of the most knowledgeable people you were meet. Objective, analytical and logical, type 5s are great problem solvers since they gather all the information and withdraw to figure things out before making a decision. By equipping themselves with information and appearing competent, they work hard for the rewards of privacy and freedom to pursue personal interests. Needing predictability, they tend to freeze when unexpectedly questions or when spontaneous reactions are called for.",
          ],
          Loyalist:[
            "Type 6 – The Loyalist",
            "Type 6s are relatively skeptical and need security. To them, the world is dangerous and trustworthy allies are hard to come by. They look for a leader which they can follow after, but may become shaky and flee, or rebel when the leadership fail them. They are great supportive team players that have strong analytical powers. Their doubt and suspicion of the others causes them to question and examine situations to gain clarity. Extreme versions of this type potentially react against their own weaknesses by seeking protection from authority or ironically bring authority down.",
          ],
          Enthusiast:[
            "Type 7 – The Enthusiast",
            "Instead of trying to get as much information about what they know like type 5s, type 7s look to explore new ideas and get new experiences. They see the world with intense enthusiasm and optimism. This is the type of person who wins the popularity poll in the office. They can be a delight to work with, being both forgiving and creative during periods of stress. They offer sweet solutions to authority problems. However, instead of confronting issues head on, they rather go through the cracks and instead of solving the root of the problem. Their creativity may give rise to great, inspirational ideas, but may result in impractical and inefficient approaches they may be insistent about.",
          ],
          Challenger:[
            "Type 8 – The Challenger",
            "Speaking of insistence and convicted stances on issues, type 8s are similarly authoritative and seek power. They often control the office hierarchy and will assume leadership. They may demand to be fully informed. Although they may seem to be angry, their anger is not personal, but often directed at the situation at hand. They hold no grudges towards in-office conflict and believe work is just work. In spite of being assertive, they often respect honest leadership and like worthy opponents if you have logical arguments.",
          ],
          Peacemaker:[
            "Type 9 – The Peacemaker",
            "Finally, we have the empathetic, easy going type 9 that loves to avoid conflict. This means that they often aim to mediate, sitting on fences and thus getting caught in the middle of sides. They also make good social gel because people are open to them. They enjoy procedures, lines of command and good definition. They flourish when people support them, but this makes them cautionary in taking risks as they fear the outcome may be disliked by some. Tending to major on minor issues, they may feel overwhelmed with too much to do.",
          ],
          Colleague:[
            "Capitalize on the Enneagram to Work Better with your Colleague",
            "Finally, we have the empathetic, easy going type 9 that loves to avoid conflict. This means that they often aim to mediate, sitting on fences and thus getting caught in the middle of sides. They also make good social gel because people are open to them. They enjoy procedures, lines of command and good definition. They flourish when people support them, but this makes them cautionary in taking risks as they fear the outcome may be disliked by some. Tending to major on minor issues, they may feel overwhelmed with too much to do.",
          ],
            
        }
    },
    {
        id:'2',
        links:[
          {
            path:"https://www.facebook.com/sharer.php?u=https%3A%2F%2Frelationshipstudio.sg%2Fwhy-you-shouldnt-be-afraid-of-being-vulnerable-at-work%2F&t=Why%20You%20Shouldn%E2%80%99t%20Be%20Afraid%20Of%20Being%20Vulnerable%20At%20Work",
            icon :<FacebookBlog width={20} height={20}/>
          },
          {
            path:"https://x.com/share?url=https%3A%2F%2Frelationshipstudio.sg%2Fwhy-you-shouldnt-be-afraid-of-being-vulnerable-at-work%2F&text=Why%20You%20Shouldn%E2%80%99t%20Be%20Afraid%20Of%20Being%20Vulnerable%20At%20Work",
            icon :<TwitterBlog width={16} height={16}/>
          },
          {
            path:"https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fwhy-you-shouldnt-be-afraid-of-being-vulnerable-at-work%252F%26title%3DWhy%2BYou%2BShouldn%25E2%2580%2599t%2BBe%2BAfraid%2BOf%2BBeing%2BVulnerable%2BAt%2BWork",
            icon :<Reddit width={20} height={20}/>
          },
          {
            path:"https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fwhy-you-shouldnt-be-afraid-of-being-vulnerable-at-work%252F%26title%3DWhy%2520You%2520Shouldn%25E2%2580%2599t%2520Be%2520Afraid%2520Of%2520Being%2520Vulnerable%2520At%2520Work%26summary%3DYes%252C%2520it%2520may%2520sound%2520counter-intuitive%2520to%2520show%2520vulnerability%2520in%2520the%2520workplace.%2520After%2520all%252C%2520in%2520order%2520to%2520move%2520forward%2520in%2520our%2520career%252C%2520we%25E2%2580%2599re%2520supposed%2520to%2520constantly%2520show%2520that%2520we%2520have%2520it%2520all%2520together.%250A%250ABut%2520here%25E2%2580%2599s%2520the%2520thing%253A%2520being%2520vulnerable%2520isn%25E2%2580%2599t%2520about%2520showing%2520weakn",
            icon :<LinkedIn width={20} height={20}/>
          },
          {
            path:"https://api.whatsapp.com/send?text=https%3A%2F%2Frelationshipstudio.sg%2Fwhy-you-shouldnt-be-afraid-of-being-vulnerable-at-work%2F",
            icon :<Whatsapp width={20} height={20}/>
          },
          {
            path:"https://t.me/share/url?url=https%3A%2F%2Frelationshipstudio.sg%2Fwhy-you-shouldnt-be-afraid-of-being-vulnerable-at-work%2F",
            icon :<Telegram width={20} height={20}/>
          },
          {
            path:"https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3FshareSource%3Dlegacy%26canonicalUrl%3D%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fwhy-you-shouldnt-be-afraid-of-being-vulnerable-at-work%252F%26posttype%3Dlink%26title%3DWhy%2BYou%2BShouldn%25E2%2580%2599t%2BBe%2BAfraid%2BOf%2BBeing%2BVulnerable%2BAt%2BWork%26caption%3DYes%252C%2Bit%2Bmay%2Bsound%2Bcounter-intuitive%2Bto%2Bshow%2Bvulnerability%2Bin%2Bthe%2Bworkplace.%2BAfter%2Ball%252C%2Bin%2Border%2Bto%2Bmove%2Bforward%2Bin%2Bour%2Bcareer%252C%2Bwe%25E2%2580%2599re%2Bsupposed%2Bto%2Bconstantly%2Bshow%2Bthat%2Bwe%2Bhave%2Bit%2Ball%2Btogether.%250A%250ABut%2Bhere%25E2%2580%2599s%2Bthe%2Bthing%253A%2Bbeing%2Bvulnerable%2Bisn%25E2%2580%2599t%2Babout%2Bshowing%2Bweakness.%2BInstead%252C%2Bit%25E2%2580%2599s%2Babout%2Bbeing%2Bcomfortable%2Band%2Bbrave%2Benough%2Bto%2Bbe%2Bopen%2Band%2Bhonest%2Bin%26content%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fwhy-you-shouldnt-be-afraid-of-being-vulnerable-at-work%252F",
            icon :<Tumblr width={20} height={20}/>
          },
          {
            path:"https://in.pinterest.com/pin-builder/?description=Enneagram%2C+a+roadmap+to+understanding+human+behavior%2C+has+a+history+of+over+2500+years.+An+elegant+way+to+explore+differences+in+personality+in+relationships%2C+it+has+been+proven+to+be+highly+effective+for+business+management%2C+personal+development+and+conflict+management.+It+categorizes+each+person+according+to+prevalence+in+nine+different+personality+types%2C+with+each+having&media=https%3A%2F%2Frelationshipstudio.sg%2Fwp-content%2Fuploads%2F2018%2F01%2F9-Corporate-Personality-Types-You-Need-To-Know-How-To-Deal-With.png&method=button&url=https%3A%2F%2Frelationshipstudio.sg%2F9-corporate-personality-types-you-need-to-know-how-to-deal-with%2F",
            icon :<Pinterest width={20} height={20}/>
          },
          {
            path:"https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fwhy-you-shouldnt-be-afraid-of-being-vulnerable-at-work%252F%26title%3DWhy%2520You%2520Shouldn%25E2%2580%2599t%2520Be%2520Afraid%2520Of%2520Being%2520Vulnerable%2520At%2520Work%26description%3DYes%252C%2520it%2520may%2520sound%2520counter-intuitive%2520to%2520show%2520vulnerability%2520in%2520the%2520workplace.%2520After%2520all%252C%2520in%2520order%2520to%2520move%2520forward%2520in%2520our%2520career%252C%2520we%25E2%2580%2599re%2520supposed%2520to%2520constantly%2520show%2520that%2520we%2520have%2520it%2520all%2520together.%250A%250ABut%2520here%25E2%2580%2599s%2520the%2520thing%253A%2520being%2520vulnerable%2520isn%25E2%2580%2599t%2520about%2520showing%2520weakness.%2520Instead%252C%2520it%25E2%2580%2599s%2520about%2520being%2520comfortable%2520and%2520brave%2520enough%2520to%2520be%2520open%2520and%2520honest%2520in&display=widget",
            icon :<Vk width={20} height={20}/>
          },
          {
            path:"https://login.xing.com/?dest_url=https%3A%2F%2Fwww.xing.com%2Fsocial%2Fshare%2Fspi%3Fh%3D1%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fwhy-you-shouldnt-be-afraid-of-being-vulnerable-at-work%252F",
            icon :<Xing width={20} height={20}/>
          },
          {
            path:"mailto:?body=https://relationshipstudio.sg/why-you-shouldnt-be-afraid-of-being-vulnerable-at-work/&subject=Why%20You%20Shouldn%E2%80%99t%20Be%20Afraid%20Of%20Being%20Vulnerable%20At%20Work",
            icon :<Email width={20} height={20}/>
          },
          
        ],
        description:[
            "Yes, it may sound counter-intuitive to show vulnerability in the workplace. After all, in order to move forward in our career, we’re supposed to constantly show that we have it all together.",
            "But here’s the thing: being vulnerable isn’t about showing weakness. Instead, it’s about being comfortable and brave enough to be open and honest in a professional setting without the fear of being “punished” in the form of a bad appraisal or reprimand from your boss.",
        ],
        source_path:'/why-you-shouldnt',
        title:"Why You Shouldn’t Be Afraid Of Being Vulnerable At Work",
        type_img_path:"/assets/images/Be_Afraid_Of_Being_Vulnerable.webp",
        banner_img_path:"bg-why-should",
    },
    {
        id:'3',
        links:[
          {
            path:"https://www.facebook.com/sharer.php?u=https%3A%2F%2Frelationshipstudio.sg%2Fbe-an-involved-leader-not-a-controlling-authoritarian%2F&t=Be+an+involved+leader%2C+not+a+controlling+authoritarian&_rdr",
            icon :<FacebookBlog width={20} height={20}/>
          },
          {
            path:"https://x.com/share?url=https%3A%2F%2Frelationshipstudio.sg%2Fbe-an-involved-leader-not-a-controlling-authoritarian%2F&text=Be%20an%20involved%20leader%2C%20not%20a%20controlling%20authoritarian",
            icon :<TwitterBlog width={16} height={16}/>
          },
          {
            path:"https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fbe-an-involved-leader-not-a-controlling-authoritarian%252F%26title%3DBe%2Ban%2Binvolved%2Bleader%252C%2Bnot%2Ba%2Bcontrolling%2Bauthoritarian",
            icon :<Reddit width={20} height={20}/>
          },
          {
            path:"https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fbe-an-involved-leader-not-a-controlling-authoritarian%252F%26title%3DBe%2520an%2520involved%2520leader%252C%2520not%2520a%2520controlling%2520authoritarian%26summary%3DBeing%2520a%2520leader%2520is%2520not%2520easy.%2520Balancing%2520your%2520own%2520motivations%2520and%2520ways%2520of%2520working%2520with%2520that%2520of%2520a%2520diverse%2520team%2520is%2520a%2520challenging%2520task.%2520This%2520week%2520we%2520look%2520at%2520body-centred%2520leaders%2520-%2520types%25208%252C%25209%2520and%25201%2520who%2520pride%2520themselves%2520as%2520being%2520involved%252C%2520and%2520in%2520control%2520of%2520their%2520e",
            icon :<LinkedIn width={20} height={20}/>
          },
          {
            path:"https://api.whatsapp.com/send?text=https%3A%2F%2Frelationshipstudio.sg%2Fbe-an-involved-leader-not-a-controlling-authoritarian%2F",
            icon :<Whatsapp width={20} height={20}/>
          },
          {
            path:"https://t.me/share/url?url=https%3A%2F%2Frelationshipstudio.sg%2Fbe-an-involved-leader-not-a-controlling-authoritarian%2F",
            icon :<Telegram width={20} height={20}/>
          },
          {
            path:"https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3FshareSource%3Dlegacy%26canonicalUrl%3D%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fbe-an-involved-leader-not-a-controlling-authoritarian%252F%26posttype%3Dlink%26title%3DBe%2Ban%2Binvolved%2Bleader%252C%2Bnot%2Ba%2Bcontrolling%2Bauthoritarian%26caption%3DBeing%2Ba%2Bleader%2Bis%2Bnot%2Beasy.%2BBalancing%2Byour%2Bown%2Bmotivations%2Band%2Bways%2Bof%2Bworking%2Bwith%2Bthat%2Bof%2Ba%2Bdiverse%2Bteam%2Bis%2Ba%2Bchallenging%2Btask.%2BThis%2Bweek%2Bwe%2Blook%2Bat%2Bbody-centred%2Bleaders%2B-%2Btypes%2B8%252C%2B9%2Band%2B1%2Bwho%2Bpride%2Bthemselves%2Bas%2Bbeing%2Binvolved%252C%2Band%2Bin%2Bcontrol%2Bof%2Btheir%2Benvironment%2Band%2Bteam.%250A%250AAs%2Btheir%2Bbase%2Bemotion%2Bis%26content%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fbe-an-involved-leader-not-a-controlling-authoritarian%252F",
            icon :<Tumblr width={20} height={20}/>
          },
          {
            path:"https://in.pinterest.com/pin-builder/?description=Being+a+leader+is+not+easy.+Balancing+your+own+motivations+and+ways+of+working+with+that+of+a+diverse+team+is+a+challenging+task.+This+week+we+look+at+body-centred+leaders+-+types+8%2C+9+and+1+who+pride+themselves+as+being+involved%2C+and+in+control+of+their+environment+and+team.%0A%0AAs+their+base+emotion+is&media=https%3A%2F%2Frelationshipstudio.sg%2Fwp-content%2Fuploads%2F2018%2F01%2FBe-an-involved-leader-not-a-controlling-authoritarian.png&method=button&url=https%3A%2F%2Frelationshipstudio.sg%2Fbe-an-involved-leader-not-a-controlling-authoritarian%2F",
            icon :<Pinterest width={20} height={20}/>
          },
          {
            path:"https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fbe-an-involved-leader-not-a-controlling-authoritarian%252F%26title%3DBe%2520an%2520involved%2520leader%252C%2520not%2520a%2520controlling%2520authoritarian%26description%3DBeing%2520a%2520leader%2520is%2520not%2520easy.%2520Balancing%2520your%2520own%2520motivations%2520and%2520ways%2520of%2520working%2520with%2520that%2520of%2520a%2520diverse%2520team%2520is%2520a%2520challenging%2520task.%2520This%2520week%2520we%2520look%2520at%2520body-centred%2520leaders%2520-%2520types%25208%252C%25209%2520and%25201%2520who%2520pride%2520themselves%2520as%2520being%2520involved%252C%2520and%2520in%2520control%2520of%2520their%2520environment%2520and%2520team.%250A%250AAs%2520their%2520base%2520emotion%2520is&display=widget",
            icon :<Vk width={20} height={20}/>
          },
          {
            path:"https://login.xing.com/?dest_url=https%3A%2F%2Fwww.xing.com%2Fsocial%2Fshare%2Fspi%3Fh%3D1%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fbe-an-involved-leader-not-a-controlling-authoritarian%252F",
            icon :<Xing width={20} height={20}/>
          },
          {
            path:"mailto:?body=https://relationshipstudio.sg/be-an-involved-leader-not-a-controlling-authoritarian/&subject=Be%20an%20involved%20leader%2C%20not%20a%20controlling%20authoritarian",
            icon :<Email width={20} height={20}/>
          },
          
        ],
        description:[
            "Being a leader is not easy. Balancing your own motivations and ways of working with that of a diverse team is a challenging task. This week we look at body-centred leaders – types 8, 9 and 1 who pride themselves as being involved, and in control of their environment and team.",
            "But here’s the thing: being vulnerable isn’t about showing weakness. Instead, it’s about being comfortable and brave enough to be open and honest in a professional setting without the fear of being “punished” in the form of a bad appraisal or reprimand from your boss.",
        ],
        source_path:'/controlling-authoritarian',
        title:"Be an involved leader, not a controlling authoritarian",
        type_img_path:"/assets/images/authoritarian.webp",
        banner_img_path:"bg-controlling-authoritarian",
    },
    {
        id:'4',
        links:[
          {
            path:"https://www.facebook.com/sharer.php?u=https%3A%2F%2Frelationshipstudio.sg%2Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%2F&t=Here%E2%80%99s+How+Stress+Looks+Like+for+Each+Enneagram+Type+and+Ways+to+Manage+It&_rdr",
            icon :<FacebookBlog width={20} height={20}/>
          },
          {
            path:"https://x.com/share?url=https%3A%2F%2Frelationshipstudio.sg%2Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%2F&text=Here%E2%80%99s%20How%20Stress%20Looks%20Like%20for%20Each%20Enneagram%20Type%20and%20Ways%20to%20Manage%20It",
            icon :<TwitterBlog width={16} height={16}/>
          },
          {
            path:"https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%252F%26title%3DHere%25E2%2580%2599s%2BHow%2BStress%2BLooks%2BLike%2Bfor%2BEach%2BEnneagram%2BType%2Band%2BWays%2Bto%2BManage%2BIt",
            icon :<Reddit width={20} height={20}/>
          },
          {
            path:"https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%252F%26title%3DHere%25E2%2580%2599s%2520How%2520Stress%2520Looks%2520Like%2520for%2520Each%2520Enneagram%2520Type%2520and%2520Ways%2520to%2520Manage%2520It%26summary%3DHere%2520in%2520Singapore%252C%2520a%2520whopping%252092%2520percent%2520of%2520the%2520working%2520Singaporeans%2520reported%2520feeling%2520stressed%2520according%2520to%2520the%25202019%2520Cigna%2520360%2520Well-Being%2520Survey%2520which%2520is%2520significantly%2520higher%2520than%2520the%2520global%2520average%2520of%252084%2520percent.%2520Source%2520%250A%250AStress%2520has%2520different%2520faces%252C%2520let%25E2%2580%2599s",
            icon :<LinkedIn width={20} height={20}/>
          },
          {
            path:"https://api.whatsapp.com/send?text=https%3A%2F%2Frelationshipstudio.sg%2Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%2F",
            icon :<Whatsapp width={20} height={20}/>
          },
          {
            path:"https://t.me/share/url?url=https%3A%2F%2Frelationshipstudio.sg%2Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%2F",
            icon :<Telegram width={20} height={20}/>
          },
          {
            path:"https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3FshareSource%3Dlegacy%26canonicalUrl%3D%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%252F%26posttype%3Dlink%26title%3DHere%25E2%2580%2599s%2BHow%2BStress%2BLooks%2BLike%2Bfor%2BEach%2BEnneagram%2BType%2Band%2BWays%2Bto%2BManage%2BIt%26caption%3DHere%2Bin%2BSingapore%252C%2Ba%2Bwhopping%2B92%2Bpercent%2Bof%2Bthe%2Bworking%2BSingaporeans%2Breported%2Bfeeling%2Bstressed%2Baccording%2Bto%2Bthe%2B2019%2BCigna%2B360%2BWell-Being%2BSurvey%2Bwhich%2Bis%2Bsignificantly%2Bhigher%2Bthan%2Bthe%2Bglobal%2Baverage%2Bof%2B84%2Bpercent.%2BSource%2B%250A%250AStress%2Bhas%2Bdifferent%2Bfaces%252C%2Blet%25E2%2580%2599s%2Bdiscuss%2Bhow%2Beach%2BEnneagram%2Btype%2Blooks%2Blike%2Bwhen%2Bthey%25E2%2580%2599re%2Bfeeling%2Bstressed%2Bout%2Band%2Bhow%2Bto%26content%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%252F",
            icon :<Tumblr width={20} height={20}/>
          },
          {
            path:"https://in.pinterest.com/pin-builder/?description=Here+in+Singapore%2C+a+whopping+92+percent+of+the+working+Singaporeans+reported+feeling+stressed+according+to+the+2019+Cigna+360+Well-Being+Survey+which+is+significantly+higher+than+the+global+average+of+84+percent.+Source+%0A%0AStress+has+different+faces%2C+let%E2%80%99s+discuss+how+each+Enneagram+type+looks+like+when+they%E2%80%99re+feeling+stressed+out+and+how+to&media=https%3A%2F%2Frelationshipstudio.sg%2Fwp-content%2Fuploads%2F2020%2F02%2F0c15428a7d34c7b6f17da9e577613cb4_1500x.jpg&method=button&url=https%3A%2F%2Frelationshipstudio.sg%2Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%2F",
            icon :<Pinterest width={20} height={20}/>
          },
          {
            path:"https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%252F%26title%3DHere%25E2%2580%2599s%2520How%2520Stress%2520Looks%2520Like%2520for%2520Each%2520Enneagram%2520Type%2520and%2520Ways%2520to%2520Manage%2520It%26description%3DHere%2520in%2520Singapore%252C%2520a%2520whopping%252092%2520percent%2520of%2520the%2520working%2520Singaporeans%2520reported%2520feeling%2520stressed%2520according%2520to%2520the%25202019%2520Cigna%2520360%2520Well-Being%2520Survey%2520which%2520is%2520significantly%2520higher%2520than%2520the%2520global%2520average%2520of%252084%2520percent.%2520Source%2520%250A%250AStress%2520has%2520different%2520faces%252C%2520let%25E2%2580%2599s%2520discuss%2520how%2520each%2520Enneagram%2520type%2520looks%2520like%2520when%2520they%25E2%2580%2599re%2520feeling%2520stressed%2520out%2520and%2520how%2520to&display=widget",
            icon :<Vk width={20} height={20}/>
          },
          {
            path:"https://login.xing.com/?dest_url=https%3A%2F%2Fwww.xing.com%2Fsocial%2Fshare%2Fspi%3Fh%3D1%26url%3Dhttps%253A%252F%252Frelationshipstudio.sg%252Fheres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it%252F",
            icon :<Xing width={20} height={20}/>
          },
          {
            path:"mailto:?body=https://relationshipstudio.sg/heres-how-stress-looks-like-for-each-enneagram-type-and-ways-to-manage-it/&subject=Here%E2%80%99s%20How%20Stress%20Looks%20Like%20for%20Each%20Enneagram%20Type%20and%20Ways%20to%20Manage%20It",
            icon :<Email width={20} height={20}/>
          },
          
        ],
        description:[
            "Here in Singapore, a whopping 92 percent of the working Singaporeans reported feeling stressed according to the 2019 Cigna 360 Well-Being Survey which is significantly higher than the global average of 84 percent.",
            "But here’s the thing: being vulnerable isn’t about showing weakness. Instead, it’s about being comfortable and brave enough to be open and honest in a professional setting without the fear of being “punished” in the form of a bad appraisal or reprimand from your boss.",
        ],
        source_path:'/heres-how-stress',
        title:"Here’s How Stress Looks Like for Each Enneagram Type and Ways to Manage It",
        type_img_path:"/assets/images/Manage.webp",
        banner_img_path:"bg-Ways-to-Manage-It",
    },
    {
        id:'5',
        links:[
          {
            path:"https://m.facebook.com/sharer.php?u=https%3A%2F%2Frelationshipstudio.sg%2Fjeffrey-lim-enriching-ones-life-through-the-enneagram%2F&t=Jeffrey%20Lim%3A%20Enriching%20One%E2%80%99s%20Life%20Through%20The%20Enneagram",
            icon :<FacebookBlog width={20} height={20}/>
          },
          {
            path:"https://twitter.com/share?url=https%3A%2F%2Frelationshipstudio.sg%2Fjeffrey-lim-enriching-ones-life-through-the-enneagram%2F&text=Jeffrey%20Lim%3A%20Enriching%20One%E2%80%99s%20Life%20Through%20The%20Enneagram",
            icon :<TwitterBlog width={16} height={16}/>
          },
          {
            path:"https://reddit.com/submit?url=https://relationshipstudio.sg/jeffrey-lim-enriching-ones-life-through-the-enneagram/&title=Jeffrey%20Lim%3A%20Enriching%20One%E2%80%99s%20Life%20Through%20The%20Enneagram",
            icon :<Reddit width={20} height={20}/>
          },
          {
            path:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Frelationshipstudio.sg%2Fjeffrey-lim-enriching-ones-life-through-the-enneagram%2F&title=Jeffrey%20Lim%3A%20Enriching%20One%E2%80%99s%20Life%20Through%20The%20Enneagram&summary=%E2%80%9CWe%20can%20all%20bring%20ourselves%20to%20the%20next%20level%2C%20excelling%20in%20what%20we%20do.%E2%80%9D%0D%0A%0D%0AThe%20Enneagram%20has%20helped%20many%20of%20us%20in%20personal%20and%20professional%20development%20%E2%80%93%20This%20was%20one%20big%20takeaway%20I%20got%20from%20Jeffrey%20Lim%2C%20our%20alumnus%20from%20The%20Enneagram%20Academy.%20Jeffrey%20fir",
            icon :<LinkedIn width={20} height={20}/>
          },
          {
            path:"https://api.whatsapp.com/send?text=https%3A%2F%2Frelationshipstudio.sg%2Fjeffrey-lim-enriching-ones-life-through-the-enneagram%2F",
            icon :<Whatsapp width={20} height={20}/>
          },
          {
            path:"https://t.me/share/url?url=https%3A%2F%2Frelationshipstudio.sg%2Fjeffrey-lim-enriching-ones-life-through-the-enneagram%2F",
            icon :<Telegram width={20} height={20}/>
          },
          {
            path:"https://www.tumblr.com/share/link?url=https%3A%2F%2Frelationshipstudio.sg%2Fjeffrey-lim-enriching-ones-life-through-the-enneagram%2F&name=Jeffrey%20Lim%3A%20Enriching%20One%E2%80%99s%20Life%20Through%20The%20Enneagram&description=%E2%80%9CWe%20can%20all%20bring%20ourselves%20to%20the%20next%20level%2C%20excelling%20in%20what%20we%20do.%E2%80%9D%0D%0A%0D%0AThe%20Enneagram%20has%20helped%20many%20of%20us%20in%20personal%20and%20professional%20development%20%E2%80%93%20This%20was%20one%20big%20takeaway%20I%20got%20from%20Jeffrey%20Lim%2C%20our%20alumnus%20from%20The%20Enneagram%20Academy.%20Jeffrey%20first%20joined%20our%20April%202023%20class%20and%20since%20then%2C%20his%20personal%20and",
            icon :<Tumblr width={20} height={20}/>
          },
          {
            path:"https://pinterest.com/pin/create/button/?url=https%3A%2F%2Frelationshipstudio.sg%2Fjeffrey-lim-enriching-ones-life-through-the-enneagram%2F&description=%E2%80%9CWe%20can%20all%20bring%20ourselves%20to%20the%20next%20level%2C%20excelling%20in%20what%20we%20do.%E2%80%9D%0D%0A%0D%0AThe%20Enneagram%20has%20helped%20many%20of%20us%20in%20personal%20and%20professional%20development%20%E2%80%93%20This%20was%20one%20big%20takeaway%20I%20got%20from%20Jeffrey%20Lim%2C%20our%20alumnus%20from%20The%20Enneagram%20Academy.%20Jeffrey%20first%20joined%20our%20April%202023%20class%20and%20since%20then%2C%20his%20personal%20and&media=https%3A%2F%2Frelationshipstudio.sg%2Fwp-content%2Fuploads%2F2024%2F04%2F1625549088141.jpeg",
            icon :<Pinterest width={20} height={20}/>
          },
          {
            path:"https://vk.com/share.php?url=https%3A%2F%2Frelationshipstudio.sg%2Fjeffrey-lim-enriching-ones-life-through-the-enneagram%2F&title=Jeffrey%20Lim%3A%20Enriching%20One%E2%80%99s%20Life%20Through%20The%20Enneagram&description=%E2%80%9CWe%20can%20all%20bring%20ourselves%20to%20the%20next%20level%2C%20excelling%20in%20what%20we%20do.%E2%80%9D%0D%0A%0D%0AThe%20Enneagram%20has%20helped%20many%20of%20us%20in%20personal%20and%20professional%20development%20%E2%80%93%20This%20was%20one%20big%20takeaway%20I%20got%20from%20Jeffrey%20Lim%2C%20our%20alumnus%20from%20The%20Enneagram%20Academy.%20Jeffrey%20first%20joined%20our%20April%202023%20class%20and%20since%20then%2C%20his%20personal%20and",
            icon :<Vk width={20} height={20}/>
          },
          {
            path:"https://www.xing.com/social_plugins/share/new?sc_p=xing-share&h=1&url=https%3A%2F%2Frelationshipstudio.sg%2Fjeffrey-lim-enriching-ones-life-through-the-enneagram%2F",
            icon :<Xing width={20} height={20}/>
          },
          {
            path:"mailto:?body=https://relationshipstudio.sg/jeffrey-lim-enriching-ones-life-through-the-enneagram/&subject=Jeffrey%20Lim%3A%20Enriching%20One%E2%80%99s%20Life%20Through%20The%20Enneagram",
            icon :<Email width={20} height={20}/>
          },
          
        ],
        description:[
            "“We can all bring ourselves to the next level, excelling in what we do.” The Enneagram has helped many of us in personal and professional..",
            "But here’s the thing: being vulnerable isn’t about showing weakness. Instead, it’s about being comfortable and brave enough to be open and honest in a professional setting without the fear of being “punished” in the form of a bad appraisal or reprimand from your boss.",
        ],
        source_path:'/jeffrey-lim-enriching',
        title:"Jeffrey Lim: Enriching One’s Life Through The Enneagram",
        type_img_path:"/assets/images/Jeffrey.webp",
        banner_img_path:"bg-Jeffrey-Lim",
    }
]