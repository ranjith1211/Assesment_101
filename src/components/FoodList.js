import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";
import {
  Box,
  Button,
  Center,
  Heading,
  Select,
  SimpleGrid,
  Text,
  option,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import data from "../db.json";

export const FoodList = () => {
  const [fooddata, setfoodData] = useState(data);
  const [sortType, setSort] = useState("albums");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        Energy_kCal: "Energy_kCal",
        Protein_g: "Protein_g",
      };
      const sortProperty = types[type];
      const sorted = [...data].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setfoodData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  return (
    <div>
      <Heading style={{ color: "orange" }}>FoodList</Heading>
      <Center>
        <Select
          w={"250px"}
          onChange={(e) => setSort(e.target.value)}
          placeholder="Select option"
        >
          <option value="Energy_kCal">Energy</option>
          <option value="Protein_g">Protein</option>
        </Select>
      </Center>

      {fooddata.map((e) => {
        return (
          <Box key={e.Id}>
            <Link to={`/${e.Id}`}>
              <SimpleGrid
                className="grid"
                minChildWidth="900px"
                style={{ margin: "18px", marginLeft: "-200px" }}
                spacing="50px"
                height="25px"
                box-shadow="2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
              >
                <Box className="img">
                  {/* <Center>
                                    <img src={require("../icon.png")} alt="" />
                                </Center> */}
                </Box>
                <Box className="product">
                  <Center>
                    <Text>
                      {e.Menu_Items} {`(${e.Menu_Category})`}
                    </Text>
                  </Center>
                </Box>
              </SimpleGrid>
            </Link>
            <Box>
              <hr />
            </Box>
          </Box>
        );
      })}
    </div>
  );
};
