import ImageSlide from "../types/ImageSlide";

//TODO: if the quote is talked about in article, toText should be the id of the location of that quote
// A button will be made that will take you to that location, and the quote will be highlighted

const ImageSlides: ImageSlide[] = [
  {
    name: "Tempest of the Mind",
    quote:
      '"I will drain him dry as hay: Sleep shall neither night nor day Hang upon his pent-house lid; He shall live a man forbid: Weary sev\'nights nine times nine Shall he dwindle, peak and pine: Though his bark cannot be lost, Yet it shall be tempest-tossed."',
    location: "1.3 18-25",
    image: "/TempestOfTheMind.jpg",
    inText: ""
  },
  {
    name: "Cursed Thoughts",
    quote:
      "“There's husbandry in heaven; Their candles are all out. Take thee that too. A heavy summons lies like lead upon me, And yet I would not sleep: merciful powers, Restrain in me the cursed thoughts that nature Gives way to in repose!”",
    location: "2.1 5-10",
    image: "/CursedThoughts.jpg",
    inText: ""
  },
  {
    name: "No Sleep",
    quote:
      '“Still it cried "Sleep no more!" to all the house; "Glamis hath murdered sleep, and therefore Cawdor shall sleep no more, Macbeth shall sleep no more.”',
    location: "2.2, 44-47",
    image: "/NoSleep.jpg",
    inText: ""
  },
  {
    name: "Torment of the Mind",
    quote:
      "“Ere we will eat our meal in fear and sleep In the affliction of these terrible dreams That shake us nightly: better be with the dead, Whom we, to gain our peace, have sent to peace, Than on the torture of the mind to lie In restless ecstasy.”",
    location: "3.2, 18-23",
    image: "/TormentOfTheMind.jpg",
    inText: ""
  },
  {
    name: "Strange Visions",
    quote:
      "“Come, we'll to sleep. My strange and self-abuse Is the initiate fear that wants hard use: We are yet but young in deed.”",
    location: "3.4, 144-145",
    image: "/StrangeVisions.jpg",
    inText: ""
  },
  {
    name: "Prophecy of the Witches",
    quote:
      "“what need I fear of thee? But yet I'll make assurance double sure, And take a bond of fate: thou shalt not live; That I may tell pale-hearted fear it lies, And sleep in spite of thunder.”",
    location: "4.1, 104-107",
    image: "/ProphecyOfTheWitches.jpg",
    inText: ""
  }
];

export default ImageSlides;
