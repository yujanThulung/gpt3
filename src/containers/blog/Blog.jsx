import React from 'react'
import './blog.css'
import {Article} from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './imports';

let date = new Date();
const options = {month:'short',day:'numeric',year:'numeric'};
const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '');


const Blog = () => {
  return (
    <div className='
      gpt3__blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imageUrl={blog01} date={formattedDate} title="Gpt-3 and Open AI is the future. Let us explore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imageUrl={blog02} date={formattedDate} title="Gpt-3 and Open AI is the future. Let us explore how it is?"/>
        <Article imageUrl={blog03} date={formattedDate} title="Gpt-3 and Open AI is the future. Let us explore how it is?"/>
        <Article imageUrl={blog04} date={formattedDate} title="Gpt-3 and Open AI is the future. Let us explore how it is?"/>
        <Article imageUrl={blog05} date={formattedDate} title="Gpt-3 and Open AI is the future. Let us explore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
