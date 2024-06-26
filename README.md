# tfjs-electron-app
This is a minimal example using `TensorFlow.js` to train and run a model locally in a Desktop environment created with `Electron.js`.

## How to use this repo
Clone this repo locally, `cd` into it, then:
1. Install dependencies. ```npm i```
2. Build the application. ```npm run build```
3. Test the app locally. ```npm run start```
4. Build for distribution. ```npm run dist```

## Why this approach?

Why have I decided to experiment with this oddball tech stack? Let’s unpack.

### Local Models

Running local models protects data privacy, removes network latency, and enables offline use; all important considerations for real-time creative applications involving sensitive IP. These benefits come at the cost of model performance and higher system requirements than on the web.

### JavaScript

Primary advantage of using JavaScript: much of your code will be portable to the web. You’ll also have access to tools you’re probably familiar with like **React**, `Next.js`, and `Electron.js` for developing cross-platform experiences.

I also choose JavaScript for demos and public-facing code because of its widespread familiarity among product developers and full-stack developers, who comprise a large percentage of my audience. If my code is readable, I expect Python developers to be able to follow along as well.

Finally, JavaScript was selected based on the observation that many JavaScript developers and AI startups are currently working on solving the same problem: *how do we create a life-changing experience with AI?*

### TensorFlow.js

`TensorFlow.js` is both cross-platform and optimized for CPU and GPU execution, which makes it stand out as a JavaScript ML library. Many models developed for TensorFlow in Python can be adapted to run in a JavaScript environment as well. While a model like Stable Diffusion may not easily work with this library, it comes with a variety of pre-trained models, tools, and resources that we can take advantage of.

---

In the end, I disregarded all of the above reasoning to experiment with building a desktop app using local models for fun and document the results to share with you.

## Read the Full Post
Check out the full post on my blog: [https://greynewell.com/train-and-run-local-models-in-cross-platform-desktop-apps-with-tensorflowjs](https://greynewell.com/train-and-run-local-models-in-cross-platform-desktop-apps-with-tensorflowjs)
