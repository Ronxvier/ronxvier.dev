// All written content for the site lives here so the front page and the
// section pages stay in sync.

export const socials = [
    { name: "Github", href: "https://www.github.com/Ronxvier" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ronel-xavier-a0a574178/" },
    { name: "Medium", href: "https://www.medium.com/@ronxvier" },
    { name: "Strava", href: "https://strava.app.link/CJsXBgVKmVb" },
    { name: "Instagram", href: "https://www.instagram.com/ronxvier" },
    {
        name: "Ultra Running Magazine",
        href: "https://ultrarunning.com/calendar/runner/view/Ronel-Xavier-23be9a98-fab8-11ef-beeb-8e80a249bae3",
    },
];

export const research = {
    name: "Research",
    kind: "Wong Research Group",
    href: "https://ncsu-wong.org/research.html",
    summary:
        "I'm currently working at Wong Research Group on software engineering and computer vision research for PUF-based authentication and counterfeit detection. My work focuses on improving the deployment and performance of a research-grade mobile imaging system.",
    note: "Unfortunately I'm unable to talk about the details, but I'll be able to share more once our work is published.",
};

export type Project = { name: string; kind: string; href?: string; summary: string };

export const projects: Project[] = [
    {
        name: "VimMotions",
        kind: "Chrome extension",
        href: "https://github.com/Ronxvier/VimMotions",
        summary:
            "Chrome Extension that allows for Vim-style keybindings for efficient text navigation and editing in browser inputs, with 1,700+ installs on the Chrome Webstore.",
    },
    {
        name: "nanograd",
        kind: "Python",
        href: "https://github.com/Ronxvier/nanograd",
        summary:
            "Backpropagation engine written from scratch, implementation of Andrej Karpathy's micrograd.",
    },
    {
        name: "Algorithms",
        kind: "Java",
        href: "https://github.com/Ronxvier/Algorithms",
        summary:
            "My implementations, notes, and documentation of Data Structures and Algorithms covered by Robert Sedgewick's Algorithms 1 course, all written in Java.",
    },
    {
        name: "Grokking Algorithms",
        kind: "Python",
        href: "https://github.com/Ronxvier/Grokking_Algorithms",
        summary:
            "My notes and implementations for Grokking Algorithms, by Aditya Bhargava.",
    },

    {
        name: "Interpreters",
        kind: "Java",
        href: "https://github.com/Ronxvier/Interpreters",
        summary:
            "Notes and interpreter implementations following Robert Nystrom's Crafting Interpreters, written in Java.",
    },
    {
        name: "CatFish",
        kind: "Hack_NCState 2026",
        href: "https://github.com/EthicalFlipper/Catfish",
        summary: "AI catfishing detection for Tinder. Built for Hack_NCState 2026.",
    },
    {
        name: "Medium",
        kind: "Writing",
        href: "https://www.medium.com/@ronxvier",
        summary: "I occasionally write articles about computer stuff.",
    },
    {
        name: "Shali",
        kind: "Rust",
        href: "https://github.com/Ronxvier/Shali",
        summary: "CLI notes app with AES-GCM-SIV encryption, built in Rust.",
    },
    {
        name: "ymir.nvim",
        kind: "Lua",
        href: "https://github.com/Ronxvier/ymir.nvim",
        summary: "A snowy mountain sunset theme for Neovim.",
    },
    {
        name: "dent.nvim",
        kind: "Lua",
        href: "https://github.com/Ronxvier/dent.nvim",
        summary: "Small indentation helper for Neovim.",
    },
    {
        name: "mocha.nvim",
        kind: "Lua",
        href: "https://github.com/Ronxvier/mocha.nvim",
        summary: "Java quality of life changes for Neovim.",
    },
    {
        name: "flick",
        kind: "Python/Linux",
        href: "https://github.com/Ronxvier/flick",
        summary:
            "Lightweight AI-powered terminal assistant for natural language project scaffolding and coding, created before the release of gemini-cli.",
    },
    {
        name: "MiloCam",
        kind: "Computer vision",
        href: "https://github.com/Ronxvier/MiloCam",
        summary: "facebook/detr-resnet-50 powered Schnawg-Cam.",
    },
    {
        name: "Infrastructure Reporting App",
        kind: "NCSU Grand Challenges Competition: First Place",
        summary:
            "Developed the proof of concept and plan for a community-led urban infrastructure reporting app, winning first place in the NC State's Grand Challenges of Engineering Poster competition.",
    },
    {
        name: "Jigsaw Animatronic!",
        kind: "NCSU FEDD: Third Place",
        href: "/fedd",
        summary:
            "Worked in a group of 5 to create an animatronic Billy from the Jigsaw Franchise. Worked on Circuit design and programming.",
    },
];

export type Entry = { title: string; by: string; href: string; text: string; lines?: string[]; note?: string };

export const podcasts: Entry[] = [
    {
        title: "ThePrimeagen: Programming, AI, ADHD, Productivity, Addiction, and God",
        by: "Lex Fridman Podcast",
        href: "https://open.spotify.com/episode/4dKLxxJtrftVZvMqr15IQY?si=hYmRP0TwS76zCDAbSgvI-g",
        text: "Goes through the life of ThePrimeagen, his struggles, early life, and career at Netflix. Episode covers topics like addiction, trauma, faith life, and neovim. I forget about this episode from time to time, but it's always worth revisiting.",
    },
    {
        title: "Optimal Protocols for Studying & Learning",
        by: "Huberman Lab",
        href: "https://open.spotify.com/episode/5lNlCvQ3dHrGr9Aphr2wE1?si=y6wud99aRgKRUJHsrmpH4w",
        text: "Goes over research-based methods to better retain information, such as testing as a form of studying, and touches on topics like meditation and NSDR. Goes in depth on the neurological processes underlying learning and memory.",
    },
    {
        title: "The Bizarre “Disappearance” of the Sodder Children",
        by: "Wendigoon",
        href: "https://open.spotify.com/episode/300kkh9iwQDCbKUTvhhFPg?si=F3cmHYEpQTCcfTjIqKchsg",
        text: "Discusses the disturbing disappearance of the 5 Sodder children, none over the age of 14, on Christmas Eve 1945.",
    },
    {
        title: "I Thought I was Broken - I Just Had the Wrong Words | Alex Hormozi",
        by: "Jack Neel Podcast",
        href: "https://open.spotify.com/episode/3InRlMVYly9HEbcw6TRmbS?si=jJzhqnsnSwKtt-CtJsEUdQ&context=spotify%3Aplaylist%3A37i9dQZF1FgnTBfUlzkeKt",
        text: "Alex Hormozi views the world through a behavioralist lens, manipulating his own behavior to boost output. He explains that our actions are shaped by past rewards, and burnout stems not from workload alone but from those rewards losing impact. He also stresses that any emotional drive can fuel productivity, as long as it leads to action.",
    },
    {
        title: "Explaining Why Devs Burn Out So Often w/ @ThePrimeTimeagen",
        by: "HealthyGamerGG",
        href: "https://open.spotify.com/episode/7FaxQVpbnT60tJEGdOWyHl?si=IeHlBcakTf2CFe7rS593OQ",
        text: "This podcast definitely extends beyond the premise in the title. It offers a surprisingly deep look into ThePrimeagen's personal life and development, and Dr. Kanojia adds some insight that really gave the conversation new meaning.",
    },
    {
        title: "How to Set & Achieve Massive Goals | Alex Honnold",
        by: "Huberman Lab",
        href: "https://open.spotify.com/episode/723dfMnS8ukx4Eb4rGoYrE?si=-nNA2uiUSDCValuGFIfKgQ",
        text: "Was recently reminded of this episode. Has a really interesting conversation about death and how it motivates a more fulfilling life. The Climbing and Yosemite conversations only add to my enjoyment of the episode.",
    },
    {
        title: "Cosmic Queries - Take Me To Your Leader",
        by: "StarTalk Radio",
        href: "https://open.spotify.com/episode/1A8egd92Q7auHHv2E2Eex4?si=4310cf5a2bd9472d",
        text: "I've been into StarTalk for years, but haven't really been actively listening to it since my junior year of high school, so it was great to find it back in my recommended podcast list. The Cosmic Queries format in which Neil answers questions people have about the universe has always been super interesting to me, and this episode is a really good entry in that format.",
    },
];

// Lyrics are stored as lines so they can be set as verse.
export const music: Entry[] = [
    {
        title: "Champagne Coast",
        by: "Blood Orange",
        href: "https://www.youtube.com/watch?v=ZRvoBmkxomM&list=RDZRvoBmkxomM&start_radio=1",
        text: "",
        lines: [
            "Finishing eight or nine?",
            "Tell me, what's the perfect time?",
            "I told you I'll be waiting",
            "Hiding from the rainfall",
            "So, tell me, what's the joy of giving if you're never pleased?",
            "On my last strength against you",
            "Baby, tell me what you need",
        ],
    },
    {
        title: "Let Down",
        by: "Radiohead",
        href: "https://www.youtube.com/watch?v=ZVgHPSyEIqk",
        text: "",
        lines: [
            "Legs are going, don't get sentimental",
            "It always ends up drivel",
            "One day, I am gonna grow wings",
            "A chemical reaction",
            "Hysterical and useless",
        ],
    },
    {
        title: "End of Beginning",
        by: "Djo",
        href: "https://www.youtube.com/watch?v=Ec08db2hP10&list=RDEc08db2hP10&start_radio=1",
        text: "",
        lines: [
            "And when I'm back in Chicago, I feel it",
            "Another version of me, I was in it",
            "I wave goodbye to the end of beginning",
        ],
    },
    {
        title: "Sparks",
        by: "Coldplay",
        href: "https://www.youtube.com/watch?v=Ar48yzjn1PE&list=RDAr48yzjn1PE&start_radio=1",
        text: "",
        lines: [
            "Did I drive you away?",
            "I know what you'll say",
            "You say, “Oh, sing one we know”",
            "But I promise you this",
            "I'll always look out for you",
            "Yeah, that's what I'll do",
        ],
    },
    {
        title: "Running Up That Hill",
        by: "Kate Bush",
        href: "https://www.youtube.com/watch?v=wp43OdtAAkM&list=RDwp43OdtAAkM&start_radio=1",
        text: "",
        lines: [
            "Oh, come on, baby",
            "Oh, come on, darlin'",
            "Let me steal this moment from you now",
            "Oh, come on, angel",
            "Come on, come on, darlin'",
            "Let's exchange the experience",
        ],
    },
    {
        title: "Dracula",
        by: "Tame Impala",
        href: "https://www.youtube.com/watch?v=xnP7qKxwzjg",
        text: "",
        lines: [
            "In the end, I hope it's you and me",
            "In the darkness, I would never leave (I won't leave her)",
            "We both saw this moment coming from afar",
            "Now here we are",
        ],
    },
    {
        title: "The Best",
        by: "Conan Gray",
        href: "https://youtu.be/Fk9FSZo2geg?si=JaYzMMwYuvjTKZMQ",
        text: "",
        lines: [
            "Maybe it's all in my mind",
            "But swear if I saw you tonight",
            "We could make peace with it, not have to sleep with it",
            "Haunting me all of the time",
        ],
    },
    {
        title: "4Me 4Me",
        by: "Malcom Todd",
        href: "https://youtu.be/IqzfU9T-UEM?si=rJLJU7nnoRjXkkN1",
        text: "",
        lines: [
            "I just want you touching my face",
            "Look at my eyes, can you not see?",
            "I just want you, look at my face",
            "Look in my eyes are you gon' stay?",
        ],
    },
    {
        title: "You Owe Me",
        by: "Malcom Todd",
        href: "https://youtu.be/aM9zaRKYppo?si=qinOy65BtVV_jBbR",
        text: "",
        lines: [
            "What do you know?",
            "My one and only",
            "Has places to go",
            "Somewhere you don't know me",
            "I'm falling again",
            "I'm losing it slowly",
            "But this isn't the end",
            "The end that you owe me",
        ],
    },
    {
        title: "Neverender",
        by: "Justice, Tame Impala",
        href: "https://youtu.be/E7FU_mqhFGk?si=wWHnCOfKBgcumwWL",
        text: "",
        lines: [
            "Because I remember",
            "The hardest are the times I don't forget",
            "Neverender",
            "And all I was about to be",
            "'Cause I remember",
            "The hardest are the times I don't forget",
        ],
    },
    {
        title: "I know it won't work",
        by: "Gracie Abrams",
        href: "https://youtu.be/vIalke0YE_Y?si=WsguUR7yYdHyvqol",
        text: "",
        lines: [
            "And part of me wants to walk away 'til you really listen",
            "I hate to look at your face and know that we're feeling different",
            "'Cause part of me wants you back, but",
            "I know it won't work like that, huh?",
        ],
    },

];

export const books: Entry[] = [
    {
        title: "Observations on the Human Condition",
        by: "Paige Parker",
        href: "https://www.amazon.com/Observations-Human-Condition-Paige-Parker-ebook/dp/B0DPS6FGMK",
        text: "They must suffer! They must pay! Don't you understand? They won't understand unless they suffer. My God, that's the reason, isn't it?",
    },
    {
        title: "Animal Farm",
        by: "George Orwell",
        href: "https://a.co/d/hNv00DA",
        text: "It was Clover's voice. She neighed again, and all the animals broke into a gallop and rushed into the yard. Then they saw what Clover had seen. It was a pig walking on his hind legs.",
    },
    {
        title: "The Metamorphosis",
        by: "Franz Kafka",
        href: "https://a.co/d/0g6738HY",
        text: "“Dead?” said Mrs. Samsa, looking questioningly at the charwoman … “I should say so,” said the charwoman, proving her words by pushing Gregor's corpse a long way to one side with her broomstick … “Well,” said Mr. Samsa, “now thanks be to God.”",
    },
    {
        title: "Ego is the Enemy",
        by: "Ryan Holiday",
        href: "https://www.amazon.com/Audible-Ego-Is-the-Enemy/dp/B0GXXWQN75",
        text: "Humble and strong people don’t have the same trouble with these troubles that egotists do. There are fewer complaints and far less self-immolation. Instead, there’s stoic—even cheerful—resilience. Pity isn’t necessary. Their identity isn’t threatened. They can get by without constant validation. This is what we’re aspiring to—much more than mere success. What matters is that we can respond to what life throws at us.",
        note: "Audiobook on spotify is pretty good.",
    },
];

export const archive = [
    { name: "Podcasts", href: "/archive-bin/podcasts", deck: "What I've been listening to as of late.", entries: podcasts },
    { name: "Music", href: "/archive-bin/music", deck: "mmm... Spotify premium...", entries: music },
    {
        name: "Books",
        href: "/archive-bin/books",
        deck: "My favorite book is “Faster than the Speed of Love” by Brian Griffin",
        entries: books,
    },
];
