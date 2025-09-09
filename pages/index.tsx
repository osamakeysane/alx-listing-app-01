import type { NextPage } from "next";
import Card from "../components/common/Card";
import { sampleProperties } from "../constants";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleProperties.map((property, index) => (
        <Card
          key={index}
          title={property.title}
          image={property.image}
          description={property.description}
        />
      ))}
    </div>
  );
};

export default Home;
