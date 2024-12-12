import Cards from "./cards";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

function CardContainer() {
  return (
    <div className="card-container">
      <Cards
        image={image1}
        name="African Daisy"
        color="Purple"
        des="This flower showcases vibrant purple petals that transition into deep shades towards the center, which is adorned with a golden-yellow ring surrounding a dark core."
      />
      <Cards
        image={image2}
        name="Daisy"
        color="White and Yellow"
        des="The daisy features delicate white petals surrounding a bright yellow center, creating a simple yet elegant appearance. This flower is often found in gardens and wildflower fields, exuding a timeless charm. "
      />
      <Cards
        image={image3}
        name="Lotus"
        color="Pink and White"
        des="The lotus features stunning pink petals that gradually transition to white as they open, with a vibrant yellow center. It grows above large, round green leaves, often seen floating on serene waters."
      />
    </div>
  );
}

export default CardContainer;
