import React from 'react'
import css from './Footer.module.css'


const Footer = () => {
  return (
    <>
      <div className={css.wrapperFooter}>
      <h3 className={css.title}>The site was created using React by <span className={css.decorName}>Alex Prokopev</span></h3>
      
      </div>
     <div className={css.wrapperFooterContacts}>
     <h4 className={css.contacts}>Contacts</h4>
      <ul className={css.listContacts}>
        <li className={css.itemContats}><a href="https://www.linkedin.com/in/oleksandr-prokopiev-815460273/" target="_blank" rel='noreferrer' className={css.linkContact}>Linked In</a></li>
        <li className={css.itemContats}><a href="https://t.me/alexprokopev1" target="_blank" rel='noreferrer' className={css.linkContact} >Telegram</a></li>
        <li className={css.itemContats}><a href="tel:4550321254" target="_blank" rel='noreferrer' className={css.linkContact}>Viber</a></li>
      </ul>
     </div>
    
    </>
  )
}

export default Footer