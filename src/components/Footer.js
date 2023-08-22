import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
  return (
    <div class="bottom-container">
      <div className='fmain'>
        <div>
          <a class="footer-link" href="https://www.linkedin.com/in/ayush-kumar-pal/">LinkedIn <LinkedInIcon /></a>   
        </div>
        <div>
          <a class="footer-link" href="https://github.com/AyushKumarPal">GitHub <GitHubIcon /></a>
        </div>
        <div>
          <a class="footer-link" href="mailto:ayushkumar71430@gmail.com">Mail <EmailIcon /></a>
        </div>
      </div>
      <p class="copyright">© 2022 Ayush Kumar Pal. </p>
    </div>

  )
}

export default Footer
