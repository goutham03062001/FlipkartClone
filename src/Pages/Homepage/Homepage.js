
import classes from './homepage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import ProductsCard from '../../components/ProductsCard/ProductsCard'

function Homepage()
{

    const data=[
        {
            title:"Laptop",
            Price:"From 55000"
        },
        {
            title:"Mobile",
            Price:"From 45000"
        },
        {
            title:"Speakers",
            Price:"From 5000"
        },
        {
            title:"Microphone",
            Price : "200"
        }
      ]


    return(
        <div className={classes.homepage}>
            <div className={classes.top}>
               <NavBar/>
            </div> 
            <div className={classes.bottom}>
                {data.map(item => <ProductsCard data={item}/>)}
            </div>
        </div>
    )
}
export default Homepage