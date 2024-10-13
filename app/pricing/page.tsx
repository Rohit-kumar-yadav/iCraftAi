"use client"

import { Navbar } from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {PricingPlans} from './PricingPlans';
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";


export default function PricingPage() {
    const { isSignedIn, user } = useUser();
    const [isLoading, setIsLoading] = useState(false);
   
  
    const handleSubscribe = async (price_Id: string) => {
      if (!isSignedIn) {
        return;
      }
  
      setIsLoading(true);
      try {
        const response = await fetch("/api/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price_Id,
            userId: user?.id,
          }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to create checkout session");
        }
  
        const { sessionId } = await response.json();
        const stripe = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
        );
        if (!stripe) {
          throw new Error("Failed to load Stripe");
        }
        await stripe.redirectToCheckout({ sessionId });
      } catch (error) {
        console.error("Error creating checkout session:", error);
       
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="min-h-screen bg-black text-gray-100">
        <Navbar />
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-5xl font-bold mb-12 text-center text-white">
            Pricing Plans
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-8xl mx-auto">
            {PricingPlans.map((plan, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-800 flex flex-col text-pretty"
              >
                <h2 className="text-xl font-bold mb-4 text-white text-center">
                  {plan.name}
                </h2>
                <p className="text-xl font-bold mb-6 text-white text-center">
                  ${plan.price}
                  <span className="text-lg font-normal text-gray-400">
                    /month
                  </span>
                </p>
                <ul className="mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center mb-3 text-gray-300"
                    >
                      <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => plan.price_Id && handleSubscribe(plan.price_Id)}
                  disabled={isLoading || !plan.price_Id}
                  className="w-full bg-white text-black hover:bg-gray-200"
                >
                  {isLoading ? "Processing..." : "Choose Plan"}
                </Button>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
