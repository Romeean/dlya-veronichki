import { addUser } from "@/action/addUser"


export default async function AuthPage(){

  return (
  <div className="w-full flex justify-center items-center min-h-screen">
    <div className="max-w-5xl">
      <form action={addUser}>
      <input name="login" placeholder="Login" />
      <input name="password" placeholder="Password" type="password" />
      <button type="submit">Submit</button>
    </form>
    </div>
  </div>)
}