import HeaderImg from "../../public/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={HeaderImg} alt="Quiz" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
