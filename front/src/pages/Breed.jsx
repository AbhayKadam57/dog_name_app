import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  height: 100vh;
`;

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;

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
  }

  @keyframes img-appear {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Breed = () => {
  const [breedList, setBreedList] = useState([]);
  const [selectedBreed, setBreed] = useState("");
  const [selectedBreedName, setBreedName] = useState("");

  useEffect(() => {
    let isSubscribe = true;

    const getList = async () => {
      try {
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");

        const DogListObject = response.data.message;

        let List = [];

        for (let [key, value] of Object.entries(DogListObject)) {
          List.push(key);
        }

        setBreedList(List);
      } catch (e) {
        console.log(e);
      }
    };

    if (isSubscribe) {
      getList();
    }

    return () => {
      isSubscribe = false;
    };
  }, []);

  useEffect(() => {
    let isSubscribe = true;

    const getImageBreed = async () => {
      try {
        const res = await axios.post(
          `${
            import.meta.env.VITE_PROJECT_URL
          }/get-image-by-breed/${selectedBreed}`
        );

        console.log(res.data);
        setBreedName(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    if (isSubscribe) {
      getImageBreed();
    }

    return () => {
      isSubscribe = false;
    };
  }, [selectedBreed]);

  const HandleChange = (name) => {
    setBreed(name);
  };

  return (
    <Container>
      <ActionBar>
        <p>Select a breed from list to get Dog image</p>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Breed</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedBreed}
            label="Breed"
            onChange={(e) => HandleChange(e.target.value)}
          >
            {breedList.map((breedName, index) => (
              <MenuItem key={index} value={breedName}>
                {breedName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ActionBar>
      <ImageBox>
        {selectedBreedName && (
          <img
            key={selectedBreedName}
            src={selectedBreedName}
            alt="dog_breed_image"
          />
        )}
      </ImageBox>
    </Container>
  );
};

export default Breed;
