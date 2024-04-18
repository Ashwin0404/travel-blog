import React from 'react';

export default function Footer() {
  return (
    <div className='journal-footer'>
      <caption>2024 © Ashwin Anand. All Rights Reserved.</caption>
      <caption className='footer-caption'>
        <div id="details">
		<a href="https://ashwin0404.github.io/portfolio" target="_blank" rel="noreferrer noopener">GitHub/Portfolio</a> | {' '} 
        <a href="https://www.linkedin.com/in/ashwin-anand-b85462265" target="_blank" rel="noreferrer noopener">LinkedIn</a>
		</div>
      </caption>
    </div>
  );
}
