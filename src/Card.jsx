import photo from './react.svg'
function Card(){
    return(
        <>
        <div className='card'>
            <img src={photo} alt="profile" />
            <h1>Hi,Im Mr.K</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem obcaecati eius sit!</p>
        </div>
        </>
    )
}
export default Card