import './productList.css'
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
    return (
        <div className="productlist-container">
            <div className="productlist-texts">
                <h1 className="productlist-title">Create and Inspire. It's Lama</h1>
                <p className="productlist-description">
                    Lama is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles and a whole lot more awaits inside.
                </p>
            </div>
            <div className="productlist-list">
                {products.map(item => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList