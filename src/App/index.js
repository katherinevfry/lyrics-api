import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import getLyrics from '../helpers/data/LyricData';
import './App.scss';

function App() {
  const [showLyrics, setShowLyrics] = useState('');
  const [userInput, setUserInput] = useState({
    artist: '',
    title: ''
  });
  const [artistInfo, setArtistInfo] = useState({
    artist: '',
    title: ''
  });

  const getLyricsNow = () => {
    getLyrics(userInput.artist, userInput.title)
      .then((lyrics) => {
        setShowLyrics(lyrics);
      });
    setArtistInfo({
      artist: userInput.artist,
      title: userInput.title
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput({
      artist: '',
      title: ''
    });
    getLyricsNow();
  };

  console.warn(showLyrics);

  const handleUserInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value
    });
  };

  return (
   <div>
     <Form className = "form"
     onSubmit={handleSubmit}>
      <FormGroup id="formGroup">
        <Label for="artist">artist</Label>
        <Input id='artist' placeholder="damien jurado" value={userInput.artist} onChange={handleUserInput}>
        </Input>
      </FormGroup>
      <FormGroup id="formGroup">
        <Label for="title">title</Label>
        <Input id='title' placeholder="sheets" value={userInput.title} onChange={handleUserInput}>
        </Input>
      </FormGroup>
      <Button type='submit'>
      Submit
     </Button>
    </Form>
    <div>
      <h3 id="artistInfo">{artistInfo.title} by {artistInfo.artist}</h3>
      <p id="contentContainer">{showLyrics}</p>
    </div>
   </div>
  );
}

export default App;
