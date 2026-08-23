const About = () => {
  return (
    <div className='page-container'>
      <div>
        <h1 className='font-extrabold text-2xl'>About Restaurant Explorer</h1>
      </div>

      <div>
        <p>
          Restaurant Explorer is a restaurant browsing platform that allows
          users to discover, search and filter restaurants based on their
          preference.
        </p>
      </div>

      <div>
        <h2 className='font-semibold text-lg'>Features</h2>

        <ul className='list-disc'>
          <li>Restaurant browsing interface</li>
          <li>Search restaurants by name</li>
          <li>Rating-based filtering</li>
          <li>Shimmer loading UI for improved user experience</li>
          <li>Fast client-side navigation with React Router</li>
          <li>Reusable component-based architecture</li>
        </ul>
      </div>

      <div>
        <h2 className='font-semibold text-lg'>Technologies</h2>

        <ul className='list-disc'>
          <li>React</li>
          <li>React Router</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
    </div>
  )
}

export default About
