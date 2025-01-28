const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center mx-auto" style={{ backgroundColor: '#93A27C' }}>
      <h1 className="text-4xl font-bold text-white mb-4 animate-bounce text-center">404 - Страница не найдена</h1>
      <p className="text-lg text-white mb-8 text-center">Извините, но запрашиваемая страница не существует.</p>
      <button 
        onClick={() => window.location.href = '/'} 
        className="bg-white text-black px-4 py-2 rounded-xl shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105"
      >
        На главную
      </button>
    </div>
  );
};

export default NotFoundPage;