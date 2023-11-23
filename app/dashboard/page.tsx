import { SessionProvider } from "next-auth/react";

export default function Dashboard() {
  
  return (
    <SessionProvider>
    <div >
     Hello dashboard
    </div>
    </SessionProvider>
  );
}
