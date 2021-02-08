import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// export default function Dupa() {
//   return (
//     <div style={{ color: `purple` }}>
//       <h1>Hello Gatsby!</h1>
//       <Link to="/contact/">Contact</Link>
//       <p>What a world.</p>
//     </div>
//   );
// }


export default function Home() {
  return (
    <Layout>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>
  );
}
