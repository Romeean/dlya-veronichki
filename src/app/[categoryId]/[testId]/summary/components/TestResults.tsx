export function TestResults({ value }: { value: any }) {
  const isAnswered: boolean = value != "none" && value.index !== undefined && value.rightAnswer !== undefined;
  const isCorrect: boolean = isAnswered && value.index === value.rightAnswer;
  const isWrong: boolean = isAnswered && !isCorrect;

  return (
    <div>
      {!isAnswered && <p className="text-amber-500 text-2xl">Відповіді немає</p>}
      {isCorrect && <p className="text-green-500 text-2xl">Відповідь правильна</p>}
      {isWrong && <p className="text-2xl text-red-400">Відповідь неправильна</p>}
    </div>
  );
}
