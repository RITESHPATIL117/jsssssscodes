async function fetchData() {
    let data;
    try {
      const response = await fetch('https://api.example.com/data');
      data = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    console.log(data);
  }
  
  fetchData();