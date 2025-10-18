import prisma from "@/lib/prisma"

async function main() {
  const quiz = await prisma.quiz.create({
    data: {
      title: "Математичний тест на додавання",
      href: "u9a9ouihf",
      hrefCategory: "math-tests"
    },
  })
  const logicQuiz = await prisma.quiz.create({
    data: {
      title: "Логічний тест на розвиток мислення",
      href: "ijsdunrgnoe",
      hrefCategory: "logic-tests"
    }
  })
  
  await prisma.task.create({
    data: {
      question: "Скільки буде 5 + 12?",
      answers: ["17", "16", "18", "15"],
      correctAnswer: "0",
      quiz: {
        connect: { id: quiz.id },
      },
    },
  })

  
  await prisma.task.create({
  data: {
    question: "Скільки буде 7 + 6?",
    answers: ["11", "14", "12", "13"],
    correctAnswer: "3",
    quiz: { connect: { id: quiz.id } },
  },
  })
  
await prisma.task.create({
  data: {
    question: "Скільки буде 9 + 8?",
    answers: ["15", "16", "17", "18"],
    correctAnswer: "2", 
    quiz: { connect: { id: quiz.id } },
  },
})

await prisma.task.create({
  data: {
    question: "Скільки буде 5 + 9?",
    answers: ["13", "14", "15", "12"],
    correctAnswer: "1", 
    quiz: { connect: { id: quiz.id } },
  },
})

await prisma.task.create({
  data: {
    question: "Скільки буде 12 + 3?",
    answers: ["14", "16", "15", "13"],
    correctAnswer: "2", 
    quiz: { connect: { id: quiz.id } },
  },
})

await prisma.task.create({
  data: {
    question: "Скільки буде 4 + 7?",
    answers: ["9", "10", "11", "12"],
    correctAnswer: "2", 
    quiz: { connect: { id: quiz.id } },
  },
})

await prisma.task.create({
  data: {
    question: "Скільки буде 10 + 8?",
    answers: ["17", "19", "18", "16"],
    correctAnswer: "2", 
    quiz: { connect: { id: quiz.id } },
  },
})

await prisma.task.create({
  data: {
    question: "Скільки буде 6 + 6?",
    answers: ["11", "12", "13", "10"],
    correctAnswer: "1", 
    quiz: { connect: { id: quiz.id } },
  },
})

  console.log("✅ Данные успешно добавлены!")
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
