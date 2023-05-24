const Essay = () => {
  //TODO: When a quote is navigated too, it should be highlighted in the essay

  return (
    <article className="text-white">
      <span className="block indent-5 leading-loose">
        Guilt can have many different effects on a person, but most often it
        affects a person's mental health. Guilt's effect on the human mind is
        what Shakespeare is demonstrating in his play Macbeth, through the
        character Macbeth, as he goes on a murderous rampage over the course of
        the play.
      </span>
      <span className="block indent-5 leading-loose">
        Even before Macbeth's first murder, the manifestation of guilt in the
        mind is made clear by the First Witch, while she tells her story of
        tormenting a sailor, {" "}
        <div className="indent-0 inline-block" id="q1">
          “Though his bark cannot be lost, / Yet it shall be tempest-tossed.”
          (1.3.24-25).
        </div> {" "}
        The reference to the individual's "bark" (referring to their external
        appearance) being tempest-tossed reflects the internal storm of guilt.
        Despite the appearance of stability, the individual's mind is in
        constant turmoil due to their guilt, symbolized by the metaphor of being
        tossed by a tempest. This is shown in my collage “Tempest of the Mind”,
        the person represents the physical body, and appears to be perfectly
        fine, but above them is a storm forming, and their ship being torn
        apart, this represents a person's true state of being. Even though the
        person looks fine, they are about to be in a storm, and without a ship.
        This is similar to what Macbeth will go through, as while he will look
        fine physically, he will have a very hard time sleeping, and will slowly
        go insane from seeing ghosts of the people he has killed.
      </span>
    </article>
  );
};

export default Essay;
