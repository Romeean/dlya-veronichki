import { Block } from "./UI/Block";
export function SubjectBlock() {
  return (
    <section className="flex justify-center">
      <main className="max-w-5xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Block href="/math-tests" title="Математика" subTitle="Додавання та віднімання" color="#4b5ae4" />

        <Block href="/logic-tests" title="Логіка" subTitle="Цікаві задачі на мислення" color="bg-green-500" />

        <Block
          href="/memory-tests"
          title="Англійська"
          subTitle="Тести на розширення кругозору а англійській мові"
          color="#E94E77"
        />
      </main>
    </section>
  );
}
