export function TestResults({ value }: { value: any }) {
  const isAnswered: boolean =
    value != "none" && value.index !== undefined && value.rightAnswer !== undefined;
  const isCorrect: boolean = isAnswered && value.index === value.rightAnswer;
  const isWrong: boolean = isAnswered && !isCorrect;

  return (
    <div>
      {!isAnswered && <p className="text-amber-500 text-xl">Відповіді немає</p>}
      {isCorrect && <p className="text-green-500 text-xl">Відповідь правильна</p>}
      {isWrong && <p className="text-red-400 text-xl">Відповідь неправильна</p>}
    </div>
  );
}
