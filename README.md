# Pokedex

A pokedex made with React

Created with create-react-app and https://pokeapi.co/

## Brief

If you’re on your journey to be a Pokémon master, nothing is going to be more useful than a Pokédex that allows you to identify and learn more about each Pokémon.

## URL

https://kylemckell.github.io/Pokedex/

## Purpose of Project

- Interacting with an API with React Hooks
- Component Communication
- Promises, promises, promises, promises!
- (Removed) Pagination in React
- Adding event listeners in React
- Routers in React

## What I learned

This project tested me in a few ways. This is the first React Project that I have taken the time to do. There are a lot of things that I would also change.

### Styling

My approach to styling was very hard to work with. I decided that I was going to make a separate css file for each component. While this wasn't too bad for a large majority of the project, as it made finding where to style easier, it made it infinitely harder to make styles that had to do with a property of the pokemon. This could've been easily solved by making style objects in each component. But I wanted to try this way out, and while I'm glad I did, I don't think I'm going to be touching this specific way of doing it, especially if different children are going to have different styling from the same mapping function

### Fetching Data

At first, my way of fetching the data was slow, awful, and overall bad. It wasn't until I implemented a Promise all system that things started to work they way I wanted them to. While I do think that I could've fetched this better, (for instance, as you scroll, it loads more, rather than loading all at once), I enjoyed my solution enough to say that I am proud of what I've done.

This was my first real delve into asynchronous programming. And while it was a pain to figure out, I am now infinitely more familiar with the fetch api, how promises work, and how to implement that with react hooks

## Conclusion

Overall, I'm proud of how this turned out. As a first project, I think it was just complicated enough to get my brain hurting, but not too much to the point where I'd need to be hand-held through the entirety. Obviously there are some things which could be improved with the overall styling, but the purpose of the project was less of a style showoff, and more of a learning experience of working with APIs, Promises, and introducing myself to React.
