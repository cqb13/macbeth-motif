const EssayContainer = ({ essay }: { essay: React.ReactNode }) => {
  return (
    <article className="w-10/12 mx-auto font-times text-lg pb-4">
      <div className="bg-white bg-opacity-20 w-fit p-4 rounded tracking-wider backdrop-blur-md max-sm:w-full max-sm:text-center">
        <ul>
          <li>Maksim Straus</li>
          <li>Ms.Ayotte</li>
          <li>Honers English II</li>
          <li>May 17, 2023</li>
        </ul>
      </div>
      <h1 className="text-5xl font-bold text-center bg-white bg-opacity-20 w-fit p-4 rounded mx-auto mt-4 backdrop-blur-md">The Tempest Within</h1>
      <section className="bg-white bg-opacity-20 w-fit p-9 rounded tracking-wider mt-4 backdrop-blur-md">
        {essay}
      </section>
    </article>
  );
};

export default EssayContainer;
