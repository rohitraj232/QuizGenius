import React, { useState } from 'react'
import "./Home.css"
import { Button, MenuItem, TextField } from "@mui/material"
import Categories from '../../Data/Categories'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Home = ({ name, setName, fetchQuestions }) => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if(!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{ fontSize:30 }}>Quiz Settings</span>
        
        <div className='settings__select'>
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}

          <TextField onChange={(e) => setName(e.target.value)} style={{ marginBottom: 25 }} label="Enter Your Name" variant='outlined' />
          
          <TextField 
            select 
            style={{ marginBottom: 30 }} 
            label="Select Category" 
            variant='outlined'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
          </TextField>

          <TextField 
            select 
            style={{ marginBottom: 30 }} 
            label="Select Difficulty" 
            variant='outlined'
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="Hard">
              Hard
            </MenuItem>
          </TextField>

          <Button onClick={handleSubmit} variant="contained" color="primary" size="large">
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="/p4.jpg" className='banner' alt="" />
    </div>
  )
}

export default Home