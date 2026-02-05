  import Link from "next/link";
  import { cookies } from "next/headers";
  import { getUserInformation } from "@/action/user";

  export async function Header() {
    const cookieStore = await cookies();
    const userName: string | undefined = cookieStore.get("user-name")?.value;
    let user = undefined;
    if(userName){
      user = await getUserInformation(userName);
      
    }

    return (
      <header className="flex items-center p-3">
        <nav className="w-full flex justify-between">
          <div />
          
          {user ? (
            <div className="flex flex-row gap-2">
              <Link href="/account">
                <h1 className="text-white uppercase font-bold">Account</h1>
              </Link>
              <div><p className="text-[white] font-bold">|</p></div>
              <Link href="/account">
                <h1 className="text-white uppercase font-bold">LogOut</h1>
              </Link>
            </div>
          ) : (
            <div className="flex flex-row gap-2">
              <Link href="/auth" >
                <h1 className="text-white uppercase font-bold">SignIn</h1>
              </Link>
            </div>
          )}
        </nav>
      </header>
    );
  }
