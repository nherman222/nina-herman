/* eslint-disable max-len */
const modal = document.getElementById('results-modal');

// Get the button that opens the modal
const btn1 = document.getElementById('chatbot-btn');
const btn2 = document.getElementById('maze-btn');
const btn3 = document.getElementById('search-btn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
document.getElementById('menu2id').onclick = function () {
  document.getElementById('menuToggle').style.display = 'none';
};

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal.style.display = 'block';
  document.getElementById('results-title').innerHTML = 'SAP: AI Chatbot';
  // eslint-disable-next-line max-len
  document.getElementById('explanation').innerHTML = 'This past spring, I worked as an IT Application Services intern at SAP. During this time, I designed and developed a chatbot, which was incorporated into the main app launchpad. My favorite part about creating this chatbot was the opportunity to merge outside elements with my technological skills. Through researching natural language processing, I learned about conversational design and have been able to use some of my knowledge regarding natural conversation that I learned about in my linguistics class. In order to handle unexpected cases and interruptions, I have learned about and given attention to the various ways with which people think, handle technology, and interact with interfaces. Finally, I have found enjoyment in the fact that I am creating something that hundreds of people will use; I am helping eliminate a cost to the company by providing answers to questions that would have otherwise required a human or help ticket. ';
};

btn2.onclick = function () {
  modal.style.display = 'block';
  document.getElementById('results-title').innerHTML = 'Maze Solver';
  document.getElementById('explanation').innerHTML = 'For this project, I collaborated with three peers to create a multi-player client game that solves a maze of given difficulty given by a designated server. The maze is solved when all of the clients find each other. My favorite parts of this project were thinking through ideas with other people and continuously attempting to optimize our algorithm. In the beginning of the project, my group was working on two different algorithms and we quickly realized that continuing to do so would be a waste of resources. We created a plan to continue working on both for the remainder of the day and decide by the end of the day which to focus on. Through this communication, we realized that we could blend the algorithms together, creating a combined algorithm that was much faster than either alone. Through this project, I learned when to give up on certain ideas and how to sacrifice some parts of an initial idea. Additionally, I learned how to divide up a large task into different sections of code. Finally, I realized the importance of communication and understanding other people’s code and how it connects to my own. ';
};

btn3.onclick = function () {
  modal.style.display = 'block';
  document.getElementById('results-title').innerHTML = 'Search Engine';
  document.getElementById('explanation').innerHTML = 'For this project, I created a model search engine in C. This search engine included a crawler to retrieve webpages given a specific URL, an indexer to read the webpages and build an index, and a querier to output the webpage names with the number of times a query was found in the page. The search engine handled the key words “and” and “or” in the queries, giving precedence to “and.” Handling this precedence was my favorite part, as I thought of dozens of approaches with different data structures and styles of organization. I tested my various approaches on numerous example queries and created a comprehensive list of edge cases, spending hours on paper before even touching my keyboard. When I decided on my approach, the coding itself was easy. I proved to myself that designing in great detail and visualizing a plan saves time in the long run. I understood when certain approaches would be inefficient and that no matter how much time I had already spent on those approaches, trying to fix them out of stubbornness not be productive. Yet simultaneously, I was able to use the ideas from previous approaches to contribute to my current method. Designing and implementing the back-end of a concept that I have used throughout my lifetime has made me think in greater detail about the back-end designs for the websites and apps that I use daily.  ';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
