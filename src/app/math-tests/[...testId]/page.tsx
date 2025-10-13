export default async function Page({params}: {params: {testId: string[]}}){
  return(
    <p>Текущая страница: {params.testId}</p>

  )
}   


