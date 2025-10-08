export default function Page({params}: {params: {testId: string[]}}){
  return(
    <p>CurrentPage {params.testId}</p>
  )
}   