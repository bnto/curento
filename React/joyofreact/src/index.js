// 1. Import dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';

// 2. Create a React element
const message = {
  content: 'Just ate at “Les Corbeaux En Colère”. Wonderful little venue!',
  published: '2024-03-14T15:09:26.000Z',
  author: {
    avatarSrc: 'https://sandpack-bundler.vercel.app/img/avatars/009.png',
    avatarDescription: 'Cartoon bear',
    name: 'Ben Thorn',
    handle: 'benjaminthorn',
  }
};

// 008 Exercices
const element = (
  <>
    <form>
      <label htmlFor="search-input">Search:</label>
      <input id="search-input" />
      <button
        aria-label="Submit"
        className="submit-btn"
      >
        <img
          alt=""
          src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
        />
      </button> 
    </form>
    <article style={{ filter: 'var(--shadow-elevation-high)' }}>
      <header>
        <img src={ message.author.avatarSrc } />
        <a href={ "https://twitter.com/@" + message.author.handle }>{ message.author.name}</a>
      </header>
      <p>{ message.content }</p>
      <footer>
        Posted <time dateTime={ message.published }>January 1st at 12:00am</time>
      </footer>
    </article>
  </>
);

// 3. Render the application
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);

