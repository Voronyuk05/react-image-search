
import '../../GlobalSyles.css'

export const Button = ({onLoadMore}) => {
    return (
        <button className='btn' onClick={onLoadMore}>
            Load More
        </button>
    )
}