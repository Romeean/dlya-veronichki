import { UserResultTestScalarFieldEnum } from "@/generated/internal/prismaNamespace";
import { getHTTPOnlyCookie } from "../utils/cookies";
import { getUserInformation } from "@/action/user";

export default async function AccountPage() {
  const userName = await getHTTPOnlyCookie("user-name");
  
  console.log(userName)
  if(!userName){
    return(
      <div>
        You are not authorizated!
      </div>
    )
  }
  const user = await getUserInformation(userName);

  if(user){
    return(
      <div className="text-white">
        <p className="text-white">{user.login}</p>
        {/* <p>{user.createdAt}</p> */}

      </div>

    )
  }
  
}
