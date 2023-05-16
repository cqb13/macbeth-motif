import ImageSlide from "../types/ImageSlide";

//TODO: if the quote is talked about in article, toText should be the id of the location of that quote
// A button will be made that will take you to that location, and the quote will be highlighted

const ImageSlides: ImageSlide[] = [
  {
    name: "Torment of the Mind",
    quote: '“Ere we will eat our meal in fear and sleep In the affliction of these terrible dreams That shake us nightly: better be with the dead, Whom we, to gain our peace, have sent to peace, Than on the torture of the mind to lie In restless ecstasy.”',
    location: "3.2, 18-23",
    image: "/slide1.jpg",
    inText: ""
  },
  {
    name: "No Sleep",
    quote: '“Still it cried "Sleep no more!" to all the house; "Glamis hath murdered sleep, and therefore Cawdor shall sleep no more, Macbeth shall sleep no more.”',
    location: "2.2, 44-47",
    image: "/slide2.jpg",
    inText: ""
  },
  {
    name: "Prophecy of the Witches",
    quote: '“what need I fear of thee? But yet I\'ll make assurance double sure, And take a bond of fate: thou shalt not live; That I may tell pale-hearted fear it lies, And sleep in spite of thunder.”',
    location: "4.1, 104-107",
    image: "/slide3.jpg",
    inText: ""
  }
];

export default ImageSlides;
