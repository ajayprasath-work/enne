type DataProps={
    id:string,
    description:string[],
    type:string,
    type_img_path:string,
    banner_img_path:string,
    strength?:string[],
    weaknesses?:string[],
    characteristics:string[],
    ImgData?:object[],
    src?:string,
    alt?:string
}

export const Data:DataProps[]=[
    {
        id:"1",
        description:[
            "You see the world in black and white. To you, there is good and there is evil, there is right and there is wrong. And you&apos;re driven by the need to be good and right. The great thing about you is that you&apos;re super responsible and conscientious, and you believe strongly in personal integrity. Altogether, this means you&apos;re a dependable coworker and friend. But you also set impossibly high standards for yourself, and fixate on mistakes and external criticism. You can sometimes come across as a little “judgey”.",
            "Type 1s are motivated by the desire to be good, and there&apos;s little ambiguity as to what is good to them. Things are either 100% perfect or just plain wrong. This applies to both work and relationships. Because they have a very loud and harsh inner critic, they tend to be extremely unforgiving towards their own mistakes, wrongdoings and risk-taking. This molds them into highly ethical, practical, meticulous and organised individuals. Type 1s are responsible and proactive when it comes to rectifying problems. They&apos;ll put in all the extra hours and effort to find a resolution they deem fit, which makes them excellent workers and analysts. But Type 1s still inevitably fall short of their high personal standards. To protect themselves from their own insecurities and guilt, Type 1s often end up becoming hypercritical of those around them. It&apos;s almost impossible to please a Type 1 since they hold others, including romantic partners, to unrealistic expectations."
        ],
        type:"The Perfectionist",
        type_img_path:"/assets/images/perfectionlist.webp",
        banner_img_path:"/assets/images/perfectionlist_img.webp",
        strength:[
            "Strong moral compass",
            "Set high standards",
            "Conscientious, meticulous and methodological",
            "Self-reliant"
        ],
        weaknesses:[
            "Rigid",
            "Overly critical",
            "Judgmental"
        ],
        characteristics:[
            "“I must correct the imperfections in this world.”",
            "Resentment. You feel that life is not the way that it could have been or was meant to be",
            "Anger. Looking at the state the world is in infuriates you, and the fact that others do not seem as bothered by it as you are makes it even worse.",
            "Reaction formation. Acting in an opposite manner from how you would naturally react to a given situation because you think your true response is unacceptable by society&apos;s standards"
        ]
    },
    {
        id:"2",
        description:[
            "You are the most generous giver. You give and you give in the hopes of receiving love and acceptance in return. Others know they can count on you to spare a listening ear or a shoulder to cry on. Unfortunately, you&apos;re so busy caring for the needs of others that you often neglect your own wellbeing. You may have trouble drawing boundaries and get disproportionately affected by rejection.",
            "Family, friendship and love are at the centre of a Type 2&apos;s life. They genuinely adore others. They feel moved and inspired by the ones they admire, and are motivated to help whenever they struggle. They are always thinking of others&apos; needs. They learn to love what you love, familiarise themselves with your interests, celebrate your successes, and nurse your wounds. All they want is to be loved in return.",
            "In this way, they can be self-forgetting, changing themselves to suit others to the point where they might not know who they really are. They&apos;re also not very good at setting boundaries, and can be intrusive in their care for others.",
            "Unfortunately, Type 2s can become manipulative in trying to win others&apos; approval. They give in order to receive (without even realising that this is a tactic they&apos;re using), and feel rejected whenever they don&apos;t get what they expected to receive. Like lovers spurned, they may respond in anger or guilt others into helping them in return."
        ],
        type:"The Helper",
        type_img_path:"/assets/images/helper.webp",
        banner_img_path:"/assets/images/helper_img.webp",
        strength:[
            "Sensitive to people's needs",
            "Selfless",
            "Generous",
            "Helpful and caring"
        ],
        weaknesses:[
            "Self forgetting",
            "Emotionally manipulative",
            "Intrusive"
        ],
        characteristics:[
            "“People need my help.”",
            "Flattery. You want to gain acceptance from others, so you butter them up.",
            "Pride. You have an inflated sense of self that is built upon the belief that you are indispensable and that others rely on you.",
            "Repression. Keeping your own needs, thoughts and feelings under wraps in order to be loved by others"
        ]
    },
    {
        id:"3",
        description:[
            "You strive to be the best. Recognition for your achievements is a main driving force, and you&apos;re willing to work hard and smart to get it. You are an adaptive, productive and efficient worker, so you tend to excel in competitive work environments. Slowing down isn&apos;t an option. But you can sometimes focus too much on external praise and rewards, and might be willing step over others to get it.",
            "Image is everything to Type 3s. They believe to be successful is to show others how it&apos;s done, and as a result, they&apos;re superb self-promoters and inspiring leaders. Impressive on paper and in person, a Type 3 knows how to be everything you want them to be.",
            "They like the limelight and project self-confidence. Because their achievements are their primary measure of worth, they sometimes end up pushing themselves way too hard, or cutting corners in order to get what they want. And the desire to win makes them hypercompetitive.",
            "Extremely restless when they aren&apos;t doing anything, 3s continually set new and higher goals for themselves. With that always-on attitude, they hardly ever take a break. 3s will switch from one task to the next in seconds, and will pursue multiple projects at once.",
            "But 3s clamour for social attention. In other words, they are anxious about what others think, so they may buy flashy cars, dress to impress, and go on extravagant holidays, just so others know that they&apos;ve made it."
        ],
        type:"The Achiever",
        type_img_path:"/assets/images/achiever.webp",
        banner_img_path:"/assets/images/achiever_img.webp",
        strength:[
            "Efficient",
            "Driven",
            "Result oriented"
        ],
        weaknesses:[
            "Overly competitive",
            "Superficial"
        ],
        characteristics:[
            "“I must avoid failure.”",
            "Vanity. You want to project an image of success.",
            "Deceit. When cultivating a perfect image, you are able to convince yourself that things are working out great, even when it isn&apos;t so in reality.",
            "Identification. Adopting attributes of people you admire to the extent that you no longer have a clearly defined self."
        ]
    },
    {
        id:"4",
        description:[
            "Your life is beautiful and tragic all at once. Every emotional peak and trough that comes your way is an intense experience that you embrace wholeheartedly. You are authentic, creative, and hopelessly idealistic. And you long for meaning in life. You risk becoming overwhelmed with despair if you don&apos;t find it. You also demand to express your emotions and can become a little self-absorbed.",
            "Type 4s are driven by their search of meaning and purpose in life. They are individualistic, and feel that their existence is unique. They actively express this through art and other creative pursuits. For this reason, they are incredibly real. They don&apos;t bother with superficial interactions, instead seeking out deep emotional connection.",
            "4s embrace emotions passionately and courageously. In fact, they&apos;re drawn to intense experiences that they can study and pull apart to reveal secrets of the human condition. Through this, they often end up taking on others&apos; pain. They feel their own pain acutely, too, making them prone to depression.",
            "It isn&apos;t all bad though, because by putting emotional complexity under a microscope, Type 4s develop empathic abilities and can identify with those who are suffering. They can channel this energy into creative works of self-expression. Most Type 4s are talented artists.",
            "Type 4s need their time and space to process their thoughts and emotions. Once they have, they want to make sure that their personal reflections are heard by the rest of the world."
        ],
        type:"The Individualist",
        type_img_path:"/assets/images/individualist.webp",
        banner_img_path:"/assets/images/individualist_img.webp",
        strength:[
            "Empathetic",
            "Creative",
            "Expressive",
            "Great emotional depth"
        ],
        weaknesses:[
            "Moody",
            "Melancholic",
            "Over sensitive"
        ],
        characteristics:[
            "“I&apos;m searching for something more that is missing from my life.”",
            "Melancholy. You feel a sense of loss.",
            "Envy. Other people seem to have found the key to happiness and you want it.",
            "Introjection. Lots of self-blame and internalising negative information."
        ]
    },
    {
        id:"5",
        description:[
            "You hoard knowledge, time and energy. You&apos;re self-sufficient and perceptive. Often, you are emotionally detached, choosing to guard against the intrusion of personal space because interacting with other people can be draining. You prefer to watch and learn than to actively participate.",
            "Type 5 batteries don&apos;t last long. They regularly need to retreat from society and recharge. They&apos;re motivated by their desire to accumulate knowledge and maintain autonomy. And they&apos;re really good at compartmentalising their lives.",
            "Typically, Type 5s can survive on very little. They see scarcity everywhere, and act accordingly by keeping as much time, energy, money and goods as they can to themselves. In particular, they also minimise emotional contact so as not to dry up their own emotional reserves.",
            "A lack of emotional involvement means that 5s can be rather impersonal and not the most supportive friends, although they are reliable when it comes to delivering on promises or agreed deadlines. Just don&apos;t expect them to make a song and dance of it.",
            "5s are stuck in their minds a lot, meaning they prefer information and passive analysis over being a part of the things that are happening around them. They deliberately unplug themselves from the drama and excitement of life."
        ],
        type:"The Observer",
        type_img_path:"/assets/images/observer.webp",
        banner_img_path:"/assets/images/observer_img.webp",
        strength:[
            "Intellectual",
            "Logical",
            "Objective",
            "Calm in crisis"
        ],
        weaknesses:[
            "Cold",
            "Detached",
            "Withholding resources"
        ],
        characteristics:[
            "“My resources are limited.”",
            "Stinginess. You don&apos;t like to share your scarce resources.",
            "Avarice. You guard your thoughts, feelings and property in the perpetual fight for private survival.",
            "Insolation. Preferring to stay in your head; both physically and emotionally withdrawn."
        ]
    },
    {
        id:"6",
        description:[
            "In a dangerous world, you must always be prepared for the worst-case scenario. Nothing gets past you, because you&apos;re vigilant and suspicious of others. You are quick to identify threats and to come up with contingency plans, so you&apos;re the one people turn to when they&apos;re facing adversity and need a loyal friend to support them.",
            "Trust no one but your closest allies. That&apos;s a core belief that Type 6s have, and so they keep their skepticism trained on new and uncertain situations, continually scanning for potential hazards and figuring out how to tackle them if necessary.",
            "This sometimes entails asking very difficult questions and pointing out flaws. After identifying the problems, 6s set about finding solutions. They are great troubleshooters who often do not conform to authority but bravely challenge the status quo if necessary.",
            "In generating one possible negative scenario after another, 6s may get too tied up in their anxieties to get a move on things. So, they end up procrastinating instead of acting. Worse still, they can get too overcome with fear that they give up before they even start.",
            "But trust that they won&apos;t let you down. 6s are loyal friends who will be there through thick and thin, determinedly protecting you from the threats of the world. So you can always count on them to have your back."
        ],
        type:"The Loyalist",
        type_img_path:"/assets/images/loyalist.webp",
        banner_img_path:"/assets/images/loyalist_img.webp",
        strength:[
            "Dependable and loyal",
            "Cautious",
            "'Worse-case-scenario' Planning"
        ],
        weaknesses:[
            "Cynical and distrusting",
            "Doubtful",
            "Anxious"
        ],
        characteristics:[
            "“I must find stability.”",
            "Cowardice. Constantly coming up with anticipatory scenarios.",
            "Fear. Anxiety and panic that perceived threats will be realised.",
            "Projection. Attributing your feelings and thoughts to others."
        ]
    },
    {
        id:"7",
        description:[
            "Maximise pleasure, minimise pain. That’s as good as life gets for you. Emotions are messy, so why deal with them? Instead, you indulge in novel experiences, push back against rules and avoid the mundane. You are spontaneous, exuberant and optimistic. You’re the life of the party, and people love to be around you. But when the going gets tough, you get going too.",
            "Type 7s know how to enjoy themselves. They seek stimulation and avoid limitation. They’re the ones who travel to faraway places, try all types of good food, love meeting new people and just soak up every possible new experience that they can.",
            "To 7s, everything is always rosy. But being overly optimistic can come at the expense of others. When there’s a storm brewing in their relationships or at work, they are somehow able to run away from it. Of course, this leaves others to have to clean up the mess, which can often cause those around them to feel abandoned and unsupported.",
            "The problem is, 7s are sometimes too self-focused to realise that others’ needs aren’t being met. They may explain away these issues so as not to feel bad about it. Thankfully for them, they’re smooth talkers, so it’s easy for them to wriggle out of uncomfortable social situations. Because of this, they’ve got lots of friends, despite being somewhat unreliable at times.",
            "With regard to challenges of their own, 7s can sometimes resort to escapism, leading them to bounce from one interest to the next, so as not to have to deal with a fallout or blowback if ever something doesn’t pan out the way they wanted it to."
        ],
        type:"The Enthusiast",
        type_img_path:"/assets/images/enthusiast.webp",
        banner_img_path:"/assets/images/enthusiast_img.webp",
        strength:[
            "Energetic and adventurous",
            "Positive and optimistic",
            "Humorous",
            "Thinks on their feet"
        ],
        weaknesses:[
            "Non-committal",
            "Insensitive",
            "Pain Avoidant",
            "Escapist"
        ],
        characteristics:[
            "“I must avoid pain.”",
            "Planning. You’re always thinking about the next thing you want to do.",
            "Gluttony. Longing to experience everything pleasurable.",
            "Rationalisation. Deflecting difficult thoughts and feelings by explaining them away."
        ]
    },
    {
        id:"8",
        description:[
            "You want to be in control of your life. That means being in a position of power, be it in personal or professional life. Let’s face it, you’re a boss. You’re bold and fearless, strong-willed and independent. You fight for the things you believe in - truth, justice and fairness. You refuse to show vulnerability, even if it means forgoing the opportunity to ask for help from those around you. When you aren’t careful, your immovable spirit can result in outbursts of anger and intimidation.",
            "A champion of the weak, Type 8s are the strong leaders who will fight for their people till the end. They desire control over the environment and those around them, and are attracted to positions of power that allow them to do so. Once there, they command authority with their arresting presence.",
            "8s are constantly in battle mode. And they do not like to be challenged. You’re either for them, or against them. Their one need is for power, and they demand respect from others as a sign of their submission to that power. It follows that they will assert their will upon any given situation. Anyone who will not give in is in for a fight.",
            "To maintain their control over the situation, 8s will never show weakness. They would rather project an image of invincibility than turn to others for help. But when they don’t get valuable advice and input from others, they lose out because they end up relying on their own instinct alone, which isn’t always right.",
            "8s sometimes act in cruel ways to pursue what they perceive as righting an injustice when really, they’re wrongfully punishing or intimidating others. While this strategy might get the job done, it can border on abuse and exploitation, and can even drive others close to them away."
        ],
        type:"The Challenger",
        type_img_path:"/assets/images/challenger.webp",
        banner_img_path:"/assets/images/challenger_img.webp",
        strength:[
            "Protective",
            "Strong",
            "Fights for justice",
            "Willing to be the 'bad guy'"
        ],
        weaknesses:[
            "Domineering",
            "Aggressive",
            "Intimidating",
            "Anger Outburst"
        ],
        characteristics:[
            "“I must correct the injustices of this world.”",
            "Vengeance. You want to rectify wrongdoing and often with punishment.",
            "Lust. Longing to fulfil all your needs to avoid weakness.",
            "Denial. Refusing to acknowledge negative emotions and anxiety."
        ]
    },
    {
        id:"9",
        description:[
            "You’re the peacemaker. You want nothing more than for everyone to just get along. You’re easygoing, accepting, and open-minded. When conflict arises, you look for the nearest exit. Tension stresses you out, and you’d much rather just agree and adopt someone else’s point of view than fight over it. This could be seen as a lack of conviction.",
            "Type 9s don’t ever need a chill pill, they are the chill pill. They’re laid back, and super easy to be around because they just want life to be simple and for the world to go on as it is. They want a life of comfort that doesn’t involve difficult choices.",
            "There are lots of upsides to this attitude: when conflict arises within a group, they’re great at trying to find a consensus. They’re able to let go of their own perspective to take on many new perspectives, allowing them to provide an unbiased position on the matter. But when asked for their own opinions, 9s are often stumped. They simply don’t think about themselves very much.",
            "Being too ambivalent isn’t a good thing. Their purpose and meaning in life may be substituted with other sources of satisfaction. Most commonly, 9s will participate in social activities that allow them to be included in a wider group and removes the burden of choice from their shoulders.",
            "But their lack of personal conviction can eventually frustrate not only themselves but those close to them. Paradoxically, once they have decided on something, they can be extremely obstinate and refuse to change their ways or listen to a different point of view."
        ],
        type:"The Peacemaker",
        type_img_path:"/assets/images/peacemaker.webp",
        banner_img_path:"/assets/images/peacemaker_img.webp",
        strength:[
            "Non-judgemental",
            "Adaptive and receptive",
            "Perceptive",
            "Easy going"
        ],
        weaknesses:[
            "Lack of personal opinion",
            "Passive Aggressive",
            "Ambivalent"
        ],
        characteristics:[
            "“I must preserve the peace.”",
            "Indolence. You refrain from developing opinions on things.",
            "Laziness. A desire to remain comfortable and not act.",
            "Narcotisation. Numbing yourself to escape from painful thoughts and situations."
        ]
    }
]