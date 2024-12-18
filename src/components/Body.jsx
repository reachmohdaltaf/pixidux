const Body = () => {
    return (
      <div>
        {/* Main Section */}
        <div className="flex  flex-col items-center justify-center min-h-screen bg-pink-50 text-gray-800 text-center py-16 px-8">
          <h1 className="text-5xl font-bold mb-10 text-black leading-tight">
            Transform Your Ideas into Reality
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 mb-8">
            We take your ideas and turn them into digital experiences. Whether it's design or development, we ensure your project is executed to perfection.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdd4SP2kbz_u6x3n5YcqQ_6yIHIsxtshJIYRik5i62L53x-Vw/viewform?usp=header" className="px-8 py-3 bg-pink-400 text-white text-lg font-semibold rounded-lg shadow-sm hover:bg-pink-500 transition duration-200">
            Let's Work Together
          </a>
        </div>
  
        {/* Lack of Technical Knowledge Section */}
        <div className="bg-pink-100 text-gray-800 py-16 px-8">
          <h2 className="text-3xl font-semibold text-center  text-black">
            Lack Of Technical Knowledge?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-center text-gray-600 mb-8">
            Our team of experienced designers and developers is here to guide you. We will ensure your website is not only functional but also user-friendly and visually appealing.
          </p>
          <button className="px-8 py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg shadow-sm hover:bg-pink-500 transition duration-200 mx-auto block">
            Learn More
          </button>
        </div>
  
        {/* Facing Misunderstanding In Communication Section */}
        <div className="bg-pink-50 text-gray-800 py-16 px-8">
          <h2 className="text-3xl font-semibold text-center mb-6 text-black">
            Facing Misunderstanding In Communication?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-center text-gray-600 mb-8">
            With our experienced team, we ensure seamless communication. We listen, understand, and work closely with you to achieve the best results for your project.
          </p>
          <button className="px-8 py-3 bg-pink-400 text-white text-lg font-semibold rounded-lg shadow-sm hover:bg-pink-500 transition duration-200 mx-auto block">
            Get in Touch
          </button>
        </div>
      </div>
    );
  };
  
  export default Body;
  