function generateJoke() {
    const jokes = [
        "Why don't skeletons fight each other? They don't have the guts.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why don’t some couples go to the gym? Because some relationships don’t work out.",
        "I told my computer I needed a break, and now it won’t stop sending me ads for vacations.",
        "What do you call fake spaghetti? An impasta.",
        "My wife says I need to give her more privacy. At least that's what she wrote in her journal.",
        "What did one ocean say to the other ocean? Nothing, they just waved!", 
        "Why don’t eggs tell jokes? They might crack up!",
        "Why was the math book sad? Because it had too many problems.",
        "Why do cows have hooves instead of feet? Because they lactose!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What did the grape do when it got stepped on? Nothing, it just let out a little wine!",
        "What’s orange and sounds like a parrot? A carrot!", 
        "Why did the computer go to the doctor? It had a virus!"
    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke').innerText = randomJoke;
}
