import Link from 'next/link'
import styles from '../../styles/file.module.css'
export const getStaticProps = async()=>{
     
    const  res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {
        props:{friends:data}
    }

}




const Friends = ({friends}) => {
    console.log(friends)
    return ( <>
    <center><h1>Here are list of my Friends</h1></center>
   {
    friends.map((friend)=>{
        return(
            <Link href={'friends/'+friend.id} key={friend.id}>
            <a  className={styles.single}>
                <h3>{friend.name}</h3>
            </a>

        </Link>
        )
})
   }
    
    </> );
}
 
export default Friends;