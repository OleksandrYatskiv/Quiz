import { useCallback, useEffect, useState } from "react";
import { quizzes } from "../../api/Quizzes/Quizzes";
// import Card from "../../components/Card/Card";
import CircularIndeterminate from "../../components/Loader/Loader";
import Card from "../../components/Card/ClassedCard";

export default function Cards() {
  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCardList = useCallback(async () => {
    setLoading(true);
    try {
      const response = await quizzes.get();
      setCardList(response);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [setError, setLoading]);

  useEffect(() => {
    fetchCardList();
  }, []);

  if (loading) {
    return (<CircularIndeterminate loading={loading} />);
  }
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {cardList.map((quiz) => (
        <Card key={quiz.id} quiz={quiz} />
      ))}
    </>
  );
}
