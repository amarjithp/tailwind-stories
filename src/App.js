import './App.css';

function App() {
  return (
    <div class="max-w-2xl mx-auto p-8">
      <h2 class="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-pink-600">introducing ...</h2>
      <p class="text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 mb-8 mt-4">Tailwind stories.</p>
    
      <ul class="flex space-x-6">
        <li class="flex flex-col text-center space-y-1">
          <div class="relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a class="block bg-white p-1 rounded-full" href='#'>
              <img class='h-24 w-24 rounded-full' src="https://placekitten.com/200/200" alt='cute kitty' />
            </a>
            <button class="create-story">+</button>
          </div>
          <a href='#'>Your story</a>
        </li>

        <li class="flex flex-col text-center space-y-1">
          <div class="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a class="block bg-white p-1 rounded-full" href='#'>
              <img class='h-24 w-24 rounded-full'src="https://placekitten.com/200/200" alt='cute kitty' />
            </a>
          </div>
          <a href='#'>__apurva__</a>
        </li>

        <li class="flex flex-col text-center space-y-1">
          <div class="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a class="block bg-white p-1 rounded-full" href='#'>
              <img class='h-24 w-24 rounded-full'src="https://placekitten.com/200/200" alt='cute kitty' />
            </a>
          </div>
          <a href='#'>sam_sepi0l</a>
        </li>

        <li class="flex flex-col text-center space-y-1">
          <div class="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a class="block bg-white p-1 rounded-full" href='#'>
              <img class='h-24 w-24 rounded-full'src="https://placekitten.com/200/200" alt='cute kitty' />
            </a>
          </div>
          <a href='#'>doloraz_h@ze</a>
        </li>
      </ul>
    
    
    </div>
  );
}

export default App;
