import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2em;
  gap: 2em;
  height: 100vh;
`;

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;

  p {
    font-size: 1.5em;
    text-align: center;
  }
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10em;
  min-height: 10em;
  flex-direction: column;
  gap: 1em;
  flex: 2;

  img {
    width: 100%;
    height: 70%;
    object-fit: contain;
    animation: img-appear 0.5s ease-in-out;
    transition: all 0.4s ease-in-out;

    @keyframes img-appear {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  p {
    font-weight: 800;
    font-size: 1.3em;
    text-transform: capitalize;
  }
`;

const Button = styled.button`
  padding: 0.5em 1em;
  background-color: #7ad9c4;
  border: none;
  font-size: 1em;
  border-radius: 3px;
  cursor: pointer;
`;

const Home = () => {
  const [DogImage, setDogImage] = useState("");
  const [DogName, setDogName] = useState("");

  const HandleClick = () => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_PROJECT_URL}/get-random-dog`
        );

        console.log(res.data);

        const SplittedLink = res.data.split("/");

        const Name = SplittedLink[4];

        setDogName(Name);

        console.log(Name);

        setDogImage(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  };

  return (
    <Container>
      <ActionBar>
        <p>Click the button to generate a random dog picture</p>
        <Button onClick={() => HandleClick()}>Click me</Button>
      </ActionBar>
      <ImageBox>
        {DogImage && <img key={DogImage} src={DogImage} alt="dog_image" />}
        {DogName && <p>{DogName}</p>}
      </ImageBox>
    </Container>
  );
};

export default Home;
