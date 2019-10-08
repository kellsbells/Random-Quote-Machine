const quotes = [{
        "quote": "Ideas are the beginning points of all fortunes.",
        "author": "Napoleon Hill",
    },
    {
        "quote": "Don’t read success stories, you will only get a message. Read failure stories, you will get some ideas to get success.",
        "author": "A. P. J. Abdul Kalam"
    },
    {
        "quote": "If your ship doesn’t come in, swim out to it.",
        "author": "Jonathan Winters"
    },
    {
        "quote": "Quitters never win. Winners never quit.",
        "author": "Dr. Irene C. Kassorla"
    },
    {
        "quote": "Sadness flies away on the wings of time.",
        "author": "Jean de la Fontaine"
    },
    {
        "quote": "The true way to render ourselves happy is to love our work and find in it our pleasure.",
        "author": "Francoise de Motteville"
    },
    {
        "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "author": "Thomas Edison"
    },
    {
        "quote": "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
        "author": "Byron Pulsifer"
    },
    {
        "quote": "Kind words will unlock an iron door.",
        "author": "Turkish proverb"
    },
    {
        "quote": "I believe that every person is born with talent.",
        "author": "Maya Angelou"
    },
    {
        "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
        "author": "Mahatma Gandhi"
    },
    {
        "quote": "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
        "author": "William Arthur Ward"
    },
    {
        "quote": "Do. Or do not. There is no try.",
        "author": "Yoda"
    },
    {
        "quote": "Every champion was once a contender who refused to give up.",
        "author": "Rocky Balboa"
    },
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall",
        "author": "Nelson Mandela"
    },
    {
        "quote":"Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
        "author": "Steve Jobs"
    },
    {
        "quote":"You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.",
        "author": "Woodrow Wilson"
    },
    {
        "quote": "Evil is always possible. And goodness is eternally difficult.",
        "author": "Anne Rice"
    },
    {
        "quote": "Whatever you are, be a good one.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "You are braver than you believe, stronger than you seem and smarter than you think.",
        "author": "Christopher Robin Milne",
    },
    {
        "quote": "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
        "author": "Bruce Lee",
    },
    {
        "quote":"Attitude is a little thing that makes a big difference.",
        "author": "Winston Churchill"
    },
    {
        "quote":"True genius resides in the capacity for evaluation of uncertain, hazardous, and conflicting information.",
        "author": "Winston Churchill"
    },
    {
        "quote":"Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
        "author": "Khalil Gibran"
    },
    {
        "quote":"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
        "author": "Harriet Tubman"
    },
    {
        "quote": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
        "author": "Winston Churchill"
    },
    {
        "quote": "As long as you're learning, you're not failing.",
        "author": "Bob Ross"
    },
    {
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Be formless, shapeless, like water.",
        "author": "Bruce Lee"
    },
    {
        "quote":"Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        "author": "Bill Gates"
    },
    {
        "quote":"Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "If you can't explain it simply, you don't understand it well enough.",
        "author": "Albert Einstein"
    },
    {
        "quote": "People often say that motivation doesn't last. Well, neither does bathing--that's why we recommend it daily.",
        "author": "Zig Ziglar"
    },
    {
        "quote":"It is not enough to do your best; you must know what to do, and then do your best.",
        "author": "W. Edwards Deming"
    },
    {
        "quote":"Hard work beats talent when talent fails to work hard.",
        "author": "Tim Notke"
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde"
    },
    {   
        "quote":"The imagination is truly the enemy of bigotry and dogma.",
        "author": "Ursula K. Le Guin"
    },
    {
        "quote": "Sometimes enemies are our best teachers, people can learn from their mistakes, destruction sometimes means rebirth.",
        "author": "Keanu Reeves"
    },
    {
        "quote": "The simple act of paying attention can take you a long way.",
        "author": "Keanu Reeves"
    },
    {
        "quote": "Every struggle in your life has shaped you into the person you are today. Be thankful for the hard times, they can only make you stronger.",
        "author": "Keanu Reeves"
    },
    {
        "quote": "If you have been brutally broken but still have the courage to be gentle to other living beings, then you’re a badass with a heart of an angel.",
        "author": "Keanu Reeves"
    },
    {
        "quote": "I wake up every morning believing today is going to be better than yesterday.",
        "author": "Will Smith"
    },
    {
        "quote": "The first step is you have to say that you can.",
        "author": "Will Smith"
    },
    {
        "quote": "Life isn’t how many breaths you take, but it’s the moments that take your breath away.",
        "author": "Will Smith"
    },
    {
        "quote": "Greatness is not this wonderful, esoteric, elusive, god-like feature that only the special among us will ever taste, it’s something that truly exists in all of us.",
        "author": "Will Smith"
    },
    {
        "quote": "The way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "quote": "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
        "author": "Steve Jobs"
    }
];

function randomQuotesGenerator() {
    let getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let getQuoteElement = document.getElementById("quote-holder");
    let getOwnerElement = document.getElementById("owner");

    getQuoteElement.innerHTML = getRandomQuote.quote;
    getOwnerElement.innerHTML = getRandomQuote.author;
}