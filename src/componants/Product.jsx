

export default function Product({ product, addToCart }) {
  return (
    <div className="w-full border rounded-lg shadow-lg p-4 flex flex-col gap-3">
      <img
        src={product.thumbnail || product.images?.[0] || product.image}
        alt={product.title || product.name}
        className="w-full h-64 object-contain rounded-lg"
      />
      <h1 className="text-xl font-bold">{product.title || product.name}</h1>
      <h1 className="text-lg font-semibold text-blue-600">price : ${product.price}</h1>
      
      <button 
        onClick={() => addToCart(product)}
        className="btn btn-primary w-full hover:opacity-80 transition"
      >
        add to cart
      </button>
    </div>
  );
}