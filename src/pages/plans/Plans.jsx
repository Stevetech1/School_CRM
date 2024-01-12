import Header from '../../components/Header'
import HeaderImage from '../../images/Gal3.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'
import './plans.css'
import { Link } from 'react-router-dom'

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nisi assumenda quod reiciendis 
        omnis, iusto perferendis excepturi error dolor facere voluptatum voluptate impedit quis recusandae 
        distinctio quia cum voluptas vel.
      </Header>
      <section className='plans'>
        <div className="container plans__container">
          {
            plans.map(({ id, name, desc, price, features }) => {
              return <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/Semester</h2>
                <h4>Features</h4>
                {
                  features.map(({ feature, available }, index) => {
                    return <p key={index} className={!available ? 'disable' : ''}>{feature}</p>
                  })
                }
                <Link to="/payment"><button className='btn lg'>Take This Course</button></Link>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans;