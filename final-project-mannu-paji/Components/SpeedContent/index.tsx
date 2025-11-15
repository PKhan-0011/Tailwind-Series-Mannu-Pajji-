import React from "react";
import Container from "@/Components/Container";
import Heading from "@/Components/heading";
import SubHeading from "@/Components/SubHeading";

const SpeedIndex = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-10">
      <Heading className="text-shadow-lg">
        Build for speed <br />
        Designed for scale
      </Heading>

      <SubHeading className="py-8">
        Depploy AI agents that plan, act through your tools,and report
        outcomes-witout changing your teams work.
      </SubHeading>

      {/*Yha p actaully mughe images waal data dena padega okkh!.. like jaise first page hai na landing page wahi okkh!..*/}
    </Container>
  );
};

export default SpeedIndex;
