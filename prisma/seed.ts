import prisma from "@/lib/prisma"

async function main() {
  const quiz = await prisma.quiz.create({
    data: {
      title: "Математичний тест на додавання",
      href: "u9a9ouihf"
    },
  })

  await prisma.task.create({
    data: {
      question: "Скільки буде 5 + 12?",
      answers: ["17", "52", "18", "15"],
      correctAnswer: "17",
      quiz: {
        connect: { id: quiz.id },
      },
    },
  })

  console.log("✅ Данные успешно добавлены!")
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
