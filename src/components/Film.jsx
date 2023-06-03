export const Film = ({ title, year, image }) => {
    return (
        <>
            <div >
                <h3>{title}</h3>
                <p>{year}</p>
                <img src={image} alt={title} />
            </div>
        </>
    )
}
