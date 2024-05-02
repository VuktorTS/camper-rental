import { TypeCardItem } from "../TypeCardItem/TypeCardItem";
import { Item } from "./AdverdsCardItem.styled";

export const AdverdsCardItem = ({ adverd }) => {
  return (
    <Item>
      <img src="" alt="" />
      <div className="info-container">
        <div className="header">
          <h2 className="name">{adverd.name}</h2>
          <p className="price">{adverd.price}</p>
        </div>
        <div className="info">
          <p className="reviews">
            {adverd.rating}({adverd.reviews.length} Reviews)
          </p>
          <div className="location">{adverd.location}</div>
        </div>
        <p className="description">{adverd.description}</p>
        <ul>
          <TypeCardItem
            icon="icon-adults"
            text="adults"
            value={adverd.adults}
          />
          <TypeCardItem icon="icon-transmission" text="Automatic" />
          <TypeCardItem icon="icon-engine" text="Petrol" />
          <TypeCardItem icon="icon-kitchen" text="Kitchen" />
          <TypeCardItem
            icon="icon-beds"
            text="beds"
            value={adverd.details.beds}
          />
          <TypeCardItem icon="icon-airConditioner" text="AC" />
        </ul>
        <button type="button">Show more</button>
      </div>
    </Item>
  );
};
// {
//     "_id": "1",
//     "name": "Road Bear C 23-25",
//     "price": 10000,
//     "rating": 4.5,
//     "location": "Ukraine, Kyiv",
//     "adults": 3,
//     "children": 2,
//     "engine": "petrol",
//     "transmission": "automatic",
//     "form": "alcove",
//     "length": "7.3m",
//     "width": "2.65m",
//     "height": "3.65m",
//     "tank": "208l",
//     "consumption": "30l/100km",
//     "description": "Embark on an unforgettable journey with the Road Bear C 23-25, an epitome of comfort and convenience on wheels. This alcove-style motorhome is meticulously designed to cater to the needs of families and small groups, ensuring a seamless and enjoyable road trip experience. The sleek exterior houses a spacious and thoughtfully laid out interior, making it your home away from home. The Road Bear C 23-25 boasts a stylish and modern design, coupled with top-notch amenities to enhance your travel adventures. The interior is not only aesthetically pleasing but also functional, providing ample living and sleeping space. Whether you're cruising along scenic highways or parked in a picturesque campsite, this RV offers the perfect blend of functionality and comfort. Inside, you'll find a fully equipped kitchen, complete with a refrigerator, microwave, and a three-burner hob, allowing you to prepare delicious meals on the go. The bathroom is fitted with a shower and toilet, ensuring you have the convenience of home wherever your travels take you. The sleeping quarters are designed for relaxation, with three comfortable beds to accommodate both adults and children. Additional features include air conditioning, a TV, CD player, radio, and ample storage space for all your travel essentials. The Road Bear C 23-25 is equipped with a 35kg gas supply for cooking, and a water tank with a capacity of 151 liters to meet your daily needs. Fuelled by petrol and featuring an automatic transmission, this motorhome is not only easy to drive but also fuel-efficient, allowing you to focus on enjoying the journey rather than worrying about logistics. Create lasting memories with your loved ones as you navigate the roads in the Road Bear C 23-25. It's not just an RV; it's a mobile sanctuary for your adventures, promising comfort, style, and the freedom to explore at your own pace.",
//     "details": {
//       "airConditioner": 1,
//       "bathroom": 1,
//       "kitchen": 1,
//       "beds": 3,
//       "TV": 1,
//       "CD": 1,
//       "radio": 1,
//       "shower": 1,
//       "toilet": 1,
//       "freezer": 1,
//       "hob": 3,
//       "microwave": 1,
//       "gas": "35kg",
//       "water": "151l"
//     },
//     "gallery": [
//       "https://ftp.goit.study/img/campers-test-task/1-1.webp",
//       "https://ftp.goit.study/img/campers-test-task/1-2.webp",
//       "https://ftp.goit.study/img/campers-test-task/1-3.webp"
//     ],
//     "reviews": [
//       {
//         "reviewer_name": "Alice",
//         "reviewer_rating": 5,
//         "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//       },
//       {
//         "reviewer_name": "Bob",
//         "reviewer_rating": 4,
//         "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//       }
//     ]
//   }
