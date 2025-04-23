import { useEffect } from "react";
import supabase from "../services/supabase";

export function useFetchQuestions(dispatch) {
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const { data: questions, error } = await supabase
          .from("questions")
          .select("*");

        console.log(questions);
        if (error) {
          throw new Error("Failed to fetch questions");
        }

        dispatch({ type: "dataReceived", payload: questions });
      } catch (error) {
        console.error("Failed to fetch questions:", error);
        dispatch({ type: "dataFailed" });
      }
    }

    fetchQuestions();
  }, [dispatch]);
}
