// Search movie function
function searchMovie() {
  const title = document.getElementById("movieInput").value.trim();

  const url = `https://api.themoviedb.org/3/search/movie?query=${title}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmU4YWQ2ZDM4NGVhYTA5ZGQwZjIwZjE2MGE1ZGIzNiIsIm5iZiI6MTcxNDYzMzQzNS43MjIsInN1YiI6IjY2MzMzYWRiYWQ1OWI1MDEyYjZkMzQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.08pKASkt8qQxBBtCkw2jJbCUety5O40DnYMAb2zJmBg`
    }
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (data.results.length === 0) {
        document.getElementById("movieBox").innerHTML = `<p>No movies found.</p>`;
        return;
      }

      let output = "";
      data.results.forEach((element) => {
        output += `
         <div style=" 
  display: flex; 
  
  gap: 20px; 
  padding: 15px; 
 
  border: 1px solid #ccc; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  background-color: #f9f9f9;
  max-width: 800px;
  align-items: flex-start;
">
  <img 
    src="https://image.tmdb.org/t/p/w200${element.poster_path}" 
    alt="${element.title}" 
    style="border-radius: 8px; width: 150px; object-fit: cover;"
  />
  
  <div style="flex: 1;">
    <h2 style="margin: 0 0 10px 0; font-size: 22px; color: #333;">
      ${element.title}
    </h2>
    <p style="margin: 0 0 10px 0; color: #555;">
      <strong>Release Date:</strong> ${element.release_date}
    </p>
    <p style="margin: 0; color: #666; line-height: 1.5; font-size: 14px;">
      ${element.overview || "No overview available."}
    </p>
  </div>
</div>

        `;
      });

      document.getElementById("movieBox").innerHTML = output;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      document.getElementById("movieBox").innerHTML = `<p style="color:red;">Failed to load movie data.</p>`;
    });
}


// Load popular movies by default
function loadPopularMovies() {
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmU4YWQ2ZDM4NGVhYTA5ZGQwZjIwZjE2MGE1ZGIzNiIsIm5iZiI6MTcxNDYzMzQzNS43MjIsInN1YiI6IjY2MzMzYWRiYWQ1OWI1MDEyYjZkMzQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.08pKASkt8qQxBBtCkw2jJbCUety5O40DnYMAb2zJmBg`
    }
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      let output = "<h3>🔥 Popular Movies:</h3>";
      // data.results.forEach(movie => {
      //   output += `
      //     <div style="margin-bottom:20px;">
      //       <h2>${movie.title}</h2>
      //       <p><strong>Release Date:</strong> ${movie.release_date}</p>
      //       <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
      //       <p>${movie.overview}</p>
      //     </div>
      //   `;
      // });

      for (const movie of data.results) {
        output = output + `
        
   <div style=" 
  display: flex; 
  
  gap: 20px; 
  padding: 15px; 
 
  border: 1px solid #ccc; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  background-color: #f9f9f9;
  max-width: 800px;
  align-items: flex-start;
">
  <img 
    src="https://image.tmdb.org/t/p/w200${movie.poster_path}" 
    alt="${movie.title}" 
    style="border-radius: 8px; width: 150px; object-fit: cover;"
  />
  
  <div style="flex: 1;">
    <h2 style="margin: 0 0 10px 0; font-size: 22px; color: #333;">
      ${movie.title}
    </h2>
    <p style="margin: 0 0 10px 0; color: #555;">
      <strong>Release Date:</strong> ${movie.release_date}
    </p>
    <p style="margin: 0; color: #666; line-height: 1.5; font-size: 14px;">
      ${movie.overview || "No overview available."}
    </p>
  </div>
</div>


        `
      }

      document.getElementById("movieBox").innerHTML = output;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      document.getElementById("movieBox").innerHTML = `<p style="color:red;">Failed to load popular movies.</p>`;
    });
}

document.addEventListener('DOMContentLoaded', loadPopularMovies)