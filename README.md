## Note
page, Header these are ssr. Unless I specifiy, it'll be SSR

##### Advantages of React Server Component (RSC)
- Faser load - Don't have to wait for JS to load.
- Smaller client bundle size. be components aren't included in the client.
- SEO friendly
- Access to resources that the client can't access. Something like database(orm) library.
- Hide sensitive data from the client
- More secure against XSS attack 
- Improved developer experience. Be server components are much simpler.

##### Disavantages of RSC
- Not as interactive
- No component state. We can not use the 'useState' hook
- No component lifecylce method. We can not use the 'useEffect' hook

#### Loading component
Just need to add loading.js in the /app. Noiceee

#### Dynamic routing
Add [name] folder.
Add page.jsx or js whatever you like.
Pass params or { params: { name } } to get the name

#### API
APIs are in /api folder.
Like the page.jsx is the page showing on a domain? route? same as the folder name. It's the same principle.
I can call api with api/courses(folder name)
route.jsx can have all the api calls, GET function etc


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.js`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
