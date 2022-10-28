import React from 'react'



import './info.css'

const contactDetails = [
  {
    value: '1600 Amphitheatre Parkway, Mountain View, california.',
   
  },
  { value: '+1 234 567 8900' },
  { value: 'support@example.com' },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
    </p>
  ))



const Info = () => (
  <section className="info">
    <h2 className="info-h2">Contact information</h2>

    <div className="info-details-container">{renderContactDetails()}</div>

   
  </section>
)

export default Info
