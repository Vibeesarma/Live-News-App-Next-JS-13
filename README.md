# LIVE News App in Next.js 13

- Next.js 13 has so many new features one of the new ones useRouter in come from `"next/navigation" ` do not use next.js 12 router here it will affect the code.

- Here we use to get data from the database using Graphql query so we package `npm i graphql-request` also you want package `npm i graphql`

- when you change this page to statistic you want to generate a page when that function default next.js gives you

## Mediastack

- mediastack gives you a free news api.
  - it gives you 500 free API so you can get them from there for testing purposes.

## StepZen

- this middleware gives a connection between graphql so much easier.

- In here you want to install stepzen to your terminal add globally
  -this is the one you want to run

```bash
npm install -g stepzen
```

    -  login your account it gives by stepzen guide
    -  then copy the api from dashboard
    -  after that run ```stepzen init``` in your root directory terminal it will create stepzen config file for you.
    -

- go to your stepzen account and gets your RestAPI added command.
  - this is a command `stepzen import curl` paste it your terminal.
  - then it asked the endpoint to connect to your stepzen (MediaStack url)
  - page the below URL to your terminal and accept another thing that they asked of you.
    `http://api.mediastack.com/v1/news ? access_key = YOUR_ACCESS_KEY`
  - also you can add some option parameter there if you add those to filter out the data
  - after running the command on terminal to start stepzen `stepzen start`

## Tailwind line clamp

- this helps you add a text after ... if you have text more lines. when you want add this you want to install `npm i @tailwindcss/line-clamp `

- then go your `tailwind.config.js ` file add this is your plugin `require('@tailwindcss/line-clamp')`

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
```

## Next Theme

- this is package use for change the theme `yarn add next-themes`.

```typescript
"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableColorScheme={true} attribute="">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
```

- also, you want to add `darkmode="class"` on `tailwind.config.js` file.

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
```

## React Time ago

- this was used for shows like 2 min ago, 5h ago put use this package when you want this install ```yarn add react-timeago```.

- if you use type script also install this for type declaration ```yarn add -D @types/react-timeago```.


