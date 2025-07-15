import { Oxygen } from "next/font/google";
import '@/styles/styles.scss';
import GlobalProvider from "./GlobalProvider";
import { AnimationProvider } from "@/common/animateContext";

const oxygen = Oxygen({ subsets: ["latin"], weight: ['300', '400', '700'], });

export const metadata = {
  title: "O and N Home Renovation Dubai–Expert Renovation & Maintenance Services",
  description: "Looking for reliable home renovation in Dubai? O and N Home Renovation offers expert remodeling, painting, plumbing, and repair services across the UAE. Trusted by homeowners and businesses alike.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oxygen.className}>
        <GlobalProvider>
          <AnimationProvider key={JSON.stringify(children)}>
            {children}
            <div id="nav-full" />
            <div id="mobile-nav-sidebar" className="mobile-nav-sidebar" />
            <div id="cart-sidebar" className="cart-sidebar" />
            <div id="wishlist-sidebar" className="wishlist-sidebar" />
            <div id="overlay" />
            <div id="modal" className="modal" />
          </AnimationProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
