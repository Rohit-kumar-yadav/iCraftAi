
## Getting Started

iCraftAI is a web-based content generation platform hosted at https://icraftai.vercel.app/. It leverages Google’s Gemini AI API to create tailored, high-quality content for social media platforms, including Instagram, YouTube, Twitter, and LinkedIn. The platform enables users to generate platform-optimized posts, captions, video scripts, and articles, streamlining content creation for digital marketing and personal branding. Built with Next.js, Clerk for authentication, Stripe for payments, and Neon DB for storage, iCraftAI is deployed on Vercel for scalability and performance, offering a seamless and secure user experienc

##  Local Setup

    (https://github.com/Rohit-kumar-yadav/iCraftAi)

Navigate to the project directory:

    cd icraftai         

Install dependencies:

    npm install

Configure environment variables in a .env.local file:

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEON_DATABASE_URL=your_neon_db_url
GEMINI_API_KEY=your_gemini_api_key` 



Run the development server:
##
     npm run dev



Access the app at http://localhost:3000.


