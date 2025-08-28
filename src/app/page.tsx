import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto py-10 px-4">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Ecommerce</h1>
          <p className="text-lg text-gray-600">Find the best products at unbeatable prices!</p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example product cards */}
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src="/product1.jpg" alt="Product 1" className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">Product 1</h2>
            <p className="text-gray-700 mb-2">High quality item for your needs.</p>
            <span className="block font-bold text-blue-600 mb-2">$29.99</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src="/product2.jpg" alt="Product 2" className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">Product 2</h2>
            <p className="text-gray-700 mb-2">Another great product for you.</p>
            <span className="block font-bold text-blue-600 mb-2">$49.99</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
          <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src="/product3.jpg" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">Product 3</h2>
            <p className="text-gray-700 mb-2">Best seller in our store.</p>
            <span className="block font-bold text-blue-600 mb-2">$19.99</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
  // ...existing code...
                  <h1 className="text-4xl font-bold mb-4">Welcome to My Ecommerce</h1>
                  <p className="text-lg text-gray-600">Find the best products at unbeatable prices!</p>
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {/* Example product cards */}
                  <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                    <img src="/product1.jpg" alt="Product 1" className="w-full h-40 object-cover mb-4 rounded" />
                    <h2 className="text-xl font-semibold mb-2">Product 1</h2>
                    <p className="text-gray-700 mb-2">High quality item for your needs.</p>
                    <span className="block font-bold text-blue-600 mb-2">$29.99</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                  </div>
                  <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                    <img src="/product2.jpg" alt="Product 2" className="w-full h-40 object-cover mb-4 rounded" />
                    <h2 className="text-xl font-semibold mb-2">Product 2</h2>
                    <p className="text-gray-700 mb-2">Another great product for you.</p>
                    <span className="block font-bold text-blue-600 mb-2">$49.99</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                  </div>
                  <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                    <img src="/product3.jpg" alt="Product 3" className="w-full h-40 object-cover mb-4 rounded" />
                    <h2 className="text-xl font-semibold mb-2">Product 3</h2>
                    <p className="text-gray-700 mb-2">Best seller in our store.</p>
                    <span className="block font-bold text-blue-600 mb-2">$19.99</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                  </div>
                </section>
              </main>
            </>
          );
        }
// ...existing code...
