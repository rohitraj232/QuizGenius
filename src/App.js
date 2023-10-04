import './App.css';
import axios from "axios";
import Header from './components/Header/Header';
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Quiz from "./Pages/Quiz/Quiz"
import Result from "./Pages/Result/Result"
import { useState } from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app" style={{backgroundColor: "#fff"}}>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
          </Route>

          <Route path="/quiz" exact>
            <Quiz 
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>

          <Route path="/result" exact>
            <Result name={name} score={score} />
          </Route>
        </Switch>

      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
