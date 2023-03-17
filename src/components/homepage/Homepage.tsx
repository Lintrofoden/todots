import classes from './Homepage.module.css'

const Homepage = () =>{
    return(
        <div className={classes.content}>
            <span className={classes.title}>This is a Homepage.</span>
            <span>You will see it every time you open the website or click the link Homepage in the navbar.</span>
        </div>
    )
}

export default Homepage;