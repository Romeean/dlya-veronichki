import { Block } from "./UI/Block"
export function SubjectBlock(){
  return (
    <section  className="flex justify-center">
      <main className="max-w-5xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Block
        href="/math-tests"
        title="Математика"
        subTitle="Сложение и вычитание"
        color="#4b5ae4"
      />

      <Block
        href="/logic-tests"
        title="Логика"
        subTitle="Развивай мышление и внимание"
        color="bg-green-500"
      />

      <Block
        href="/memory-tests"
        title="Память"
        subTitle="Проверь внимательность"
        color="#E94E77"
      />

    </main>
  </section>

  )
}