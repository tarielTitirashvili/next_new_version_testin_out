This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

My Docs

1. Route groups are used to better organize our project you can unify there pages with same layout error page and related functionalities without changing their url's.
2. [id] is how we define dynamic routes but if we use [[route]] bubble square brackets we will be able to catch all routes like in example with docs file here, if we call [[...routes]] our file will be able to catch parent route too.
3. layouts aren't replaying each other they are adding on top of their parent components layouts.
4. metadata if you want use dineric metadata you should use generateMetadata function with exact same name and if you want use static one you need to export metadata with same name
   also neither of this will not work in the client side components
5. metadata title property can be object in which we can set up templates for nested routes (if we will write %s in string it will be replaced by children rout's title) and define default property child routes in whom title is not specified, also you can specify absolute property for title which will overwrite parent template completely
6. if we want to have routing behavior which will reset state when user is navigated to new route we should use template in case of layout state wasn't updating
