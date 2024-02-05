const express = require('express');
const app = express();
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the default page. The server is running.</h1>");
});

const port = process.env.PORT || 3000;

app.get('/api/jokes', (req, res) => {
    const jokesData = [
        {
            id: 1,
            title: "😄 A joke",
            content: "Why don't scientists trust atoms? Because they make up everything! 😄"
        },
        {
            id: 2,
            title: "😆 Another joke",
            content: "Parallel lines have so much in common. It's a shame they'll never meet. 😆"
        },
        {
            id: 3,
            title: "😂 Yet another joke",
            content: "I told my wife she should embrace her mistakes. She gave me a hug. 😂"
        },
        {
            id: 4,
            title: "🤣 Joke number four",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field! 🤣"
        },
        {
            id: 5,
            title: "😜 Joke five",
            content: "I'm reading a book on anti-gravity. It's impossible to put down! 😜"
        },
        {
            id: 6,
            title: "😎 Joke six",
            content: "How do you organize a space party? You planet! 😎"
        },
        {
            id: 7,
            title: "🤓 Joke seven",
            content: "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them. 🤓"
        },
        {
            id: 8,
            title: "😅 Last joke",
            content: "Why don't skeletons fight each other? They don't have the guts! 😅"
        }
    ];

    res.json(jokesData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log("Click on this: http://localhost:3000/");
});
