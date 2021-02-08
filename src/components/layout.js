import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types';
import Counter from '../components/reducer';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Button = () => {
  console.log("button")
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect", count)

    return () => {
      console.log("unmount")
    }
  })
  return (
    <div id="indicator" style={{ fontSize: "4rem" }}>
      {count}
      <button
        onClick={() => {
          console.log("siemka", count)

          setCount(count + 1)
        }}
      >
        CLICK
      </button>
    </div>
  )
}

const Button1 = () => {
  console.log("button1")
  const [count1, setCount1] = useState('banana');

  console.log(useState('test'));

  useEffect(() => {
    console.log("useEffect count1", count1)

    return () => {
      console.log("unmount count1")
    }
  })
  return (
    <div id="indicator" style={{ fontSize: "4rem" }}>
      {count1}
      <button
        onClick={() => {
          console.log("siemka", count1)

          setCount1(count1 + 1)
        }}
      >
        CLICK1
      </button>
    </div>
  )
}

export default function Layout({ children }) {
  console.log("layout")
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>

        <Button></Button>
        <Button1></Button1>

        <Counter></Counter>
      </header>
      {children}
    </div>
  )
}

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}


