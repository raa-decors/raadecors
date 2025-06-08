// app/page.tsx
export const metadata = {
  title: "RAA Decors",
  icons: {
    icon: "/images/raa-logo.png", // public/images/raa-logo.png
  },
};

import Main from "./componentss/Main";

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
