'use client'
import Image from "next/image";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";




export default function Home() {
  return (
    <>
     
     <div><Hero/></div>
     <Testimonials/>
     <div className="h-screen  ">
      <div>
         <div className="lg:flex lg:gap-[177px] space-x-[20px] lg:w-[100%] lg:mx-[150px]">
        <Content text='Payments' content="Enjoy a secure, reliable and convenient way to pay. Whether you're paying for a purchase, subscription or any other type of payment, CredPal is designed to make the process fast and easy."/>
        <Image src='/assets/Frame 48096374.svg' width={402} height={441} alt='shoe icon' className="p-8"/>
      </div>
      </div>
      <div className="lg:flex lg:gap-[177px] space-x-[20px] lg:w-[100%] lg:mx-[150px]">
        <Content text='Savings' content='Simplify your savings journey by setting a budget. Save with ease by setting goals, tracking your progress, and enabling automatic transfers with your bank account. It’s that easy!'/>
        <Image src='/assets/Group 48095808.svg' width={402} height={441} alt='shoe icon' className="p-8"/>
      </div>

      <div className="lg:flex lg:gap-[177px] space-x-[20px] lg:w-[100%] lg:mx-[150px]">
        <Content text='Virtual Cards' content='Create a virtual credit or cash card, make secure online purchases, keep track of your spending, and have complete visibility of where your funds are going. With advanced security features, you have the ability to set spending limits and exert control over your spending.'/>
        <Image src='/assets/Group 48095809.svg' width={402} height={441} alt='shoe icon' className="p-8"/>
      </div>

      <div className="lg:flex lg:gap-[177px] space-x-[20px] lg:w-[100%] lg:mx-[150px]">
        <Content text='Credit Builder' content='Fund your virtual card and make payments everywhere. Use your CredPal virtual card to make purchases both online and offline with ease, and benefit from our reward-rich programs.'/>
        <Image src='/assets/Frame 1000004141.svg' width={402} height={441} alt='shoe icon' className="p-8"/>
      </div>

     

     
     </div>
    </>
   

  );
}
