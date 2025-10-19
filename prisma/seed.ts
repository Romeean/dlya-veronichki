import prisma from "@/lib/prisma";
async function main() {
  // математический квиз
  const quiz = await prisma.quiz.create({
    data: {
      title: "Математичний тест на додавання",
      testId: "u9a9ouihf",
      categoryId: "math-tests",
    },
  });

  // логический квиз
  const logicQuiz = await prisma.quiz.create({
    data: {
      title: "Логічний тест на розвиток",
      testId: "dsuofighwsf",
      categoryId: "logic-tests",
    },
  });
  // математические задания

  await prisma.task.create({
    data: {
      question: "Яке число йде після 99?",
      answers: ["98", "100", "101", "90"],
      correctAnswer: "1",
      quiz: { connect: { id: logicQuiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "У кошику 2 червоні яблука, 3 зелені й одне жовте. Скільки всього яблук?",
      answers: ["5", "6", "7", "4"],
      correctAnswer: "1",
      quiz: { connect: { id: logicQuiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Скільки буде 5 + 12?",
      answers: ["17", "16", "18", "15"],
      correctAnswer: "0",
      quiz: {
        connect: { id: quiz.id },
      },
    },
  });

  await prisma.task.create({
    data: {
      question: "Скільки буде 7 + 6?",
      answers: ["11", "14", "12", "13"],
      correctAnswer: "3",
      quiz: { connect: { id: quiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Скільки буде 9 + 8?",
      answers: ["15", "16", "17", "18"],
      correctAnswer: "2",
      quiz: { connect: { id: quiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Скільки буде 5 + 9?",
      answers: ["13", "14", "15", "12"],
      correctAnswer: "1",
      quiz: { connect: { id: quiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Скільки буде 12 + 3?",
      answers: ["14", "16", "15", "13"],
      correctAnswer: "2",
      quiz: { connect: { id: quiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Скільки буде 4 + 7?",
      answers: ["9", "10", "11", "12"],
      correctAnswer: "2",
      quiz: { connect: { id: quiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Скільки буде 10 + 8?",
      answers: ["17", "19", "18", "16"],
      correctAnswer: "2",
      quiz: { connect: { id: quiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Скільки буде 6 + 6?",
      answers: ["11", "12", "13", "10"],
      correctAnswer: "1",
      quiz: { connect: { id: quiz.id } },
    },
  });

  // логические задания
  await prisma.task.create({
    data: {
      question: "Кіт важить 3 кг. Скільки буде важити 3 таких коти?",
      answers: ["6 кг", "9 кг", "12 кг", "3 кг"],
      correctAnswer: "1", // 9 кг
      quiz: { connect: { id: logicQuiz.id } },
    },
  });
  await prisma.task.create({
    data: {
      question: "На гілці сиділо 5 пташок. 2 полетіли. Скільки залишилось?",
      answers: ["3", "2", "5", "Жодної"],
      correctAnswer: "0",
      quiz: { connect: { id: logicQuiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Що буде з мокрою хустинкою, якщо її покласти в морозильник?",
      answers: ["Висохне", "Перетвориться на лід", "Зникне", "Стане гарячою"],
      correctAnswer: "1",
      quiz: { connect: { id: logicQuiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Яка тварина каже «му»?",
      answers: ["Собака", "Кішка", "Корова", "Коза"],
      correctAnswer: "2",
      quiz: { connect: { id: logicQuiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Скільки вух у двох котів?",
      answers: ["2", "3", "4", "5"],
      correctAnswer: "2",
      quiz: { connect: { id: logicQuiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "На столі 4 яблука. Ти одне взяв. Скільки яблук у тебе?",
      answers: ["3", "4", "1", "Жодного"],
      correctAnswer: "2",
      quiz: { connect: { id: logicQuiz.id } },
    },
  });

  await prisma.task.create({
    data: {
      question: "Що буде, якщо з’їсти дуже багато морозива?",
      answers: ["Захочеться ще", "Заболить живіт", "Станеш сильнішим", "Підеш спати"],
      correctAnswer: "1",
      quiz: { connect: { id: logicQuiz.id } },
    },
  });

  console.log("✅ Данные успешно добавлены!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
